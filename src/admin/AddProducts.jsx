import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

const AddProducts = () => {

  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const AddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ========== add product to the firebase database ========== 
    try {
      const docRef = collection(db, 'products');
      const sotrageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, enterProductImg);

      uploadTask.on(
        () => {
          toast.error("image not uploaded !")
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              title: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              price: enterPrice,
              category: enterCategory,
              imgURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("product successfully added !");
      navigate("/dashboard/all-products");

    } catch (error) {
      setLoading(false);
      toast.error("product not added !");
    };
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {
              loading ?
                (
                  <h4 className='py-5'>Loading........</h4>
                ) : (
                  <>
                    <h4 className='mb-5'>Add Product</h4>
                    <Form onSubmit={AddProduct}>

                      <FormGroup className='form__group'>
                        <span>Product title</span>
                        <input type="text" placeholder='Double sofa' value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required />
                      </FormGroup>

                      <FormGroup className='form__group'>
                        <span>Short Description</span>
                        <input type="text" placeholder='lorem......' value={enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)} required />
                      </FormGroup>

                      <FormGroup className='form__group'>
                        <span>Description</span>
                        <input type="text" placeholder='Description......' value={enterDescription} onChange={e => setEnterDescription(e.target.value)} required />
                      </FormGroup>

                      <div className='d-flex align-items-center justify-content-between gap-5'>
                        <FormGroup className='form__group w-50'>
                          <span>Price</span>
                          <input type="number" placeholder='$100' value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required />
                        </FormGroup>

                        <FormGroup className='form__group w-50'>
                          <span>Category</span>
                          <select className='w-100 -2' value={enterCategory} onChange={e => setEnterCategory(e.target.value)}>
                            <option value="chair">Chair</option>
                            <option value="sofa">Sofa</option>
                            <option value="mobile">Mobile</option>
                            <option value="watch">Watch</option>
                            <option value="wireless">Wireless</option>
                          </select>
                        </FormGroup>
                      </div>

                      <div>
                        <FormGroup className='form__group'>
                          <span>Product Image</span>
                          <input type="file" onChange={e => setEnterProductImg(e.target.files[0])} required />
                        </FormGroup>
                      </div>

                      <button className="buy__btn">Add Product</button>

                    </Form>
                  </>
                )
            }
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default AddProducts