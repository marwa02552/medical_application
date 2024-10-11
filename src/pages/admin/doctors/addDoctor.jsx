import React from 'react'
import HeaderAdmin from '../../../components/admin/header/header'
import Sidebar from '../../../components/admin/sidebar/sidebar'
import './style.css'
import Input from '../../../components/input/input'
import Select from '../../../components/input/select'
import Constant from '../../../data/constant'
import Buttom from '../../../components/buttom/buttom'
import images from '../../../data/images'
export default function AddDoctor() {

    return (
        <div className='dashboard '>
            <HeaderAdmin />
            <div className='admin'>
                <Sidebar />
                <div className='content'>
                    <h3>Add Doctor</h3>
                    <div className='addDoc'>
                        <div className='inputfile'>
                            <label for="file-upload" class="custom-file-upload">
                                <img alt='upload'  src={images.upload}/>
                            </label>
                            <p>Upload doctor <br/>picture</p>
                            <input type="file" id="file-upload"/>
                        </div>
                        <div >
                            <div className='inputs'>
                                <div>
                                    <Input type={'text'} plc={'Name'} text={'Doctor name'} />
                                    <Input type={'email'} plc={'email'} text={'Doctor Email'} />
                                    <Input type={'password'} plc={'Password'} text={'Set Password'} />
                                    <Select text={'Experience'} name={'experience'} item={Constant.Experience} ></Select>
                                </div>
                                <div>
                                    <Select text={'Speciality'} name={'Speciality'} item={Constant.Speciality} ></Select>
                                    <Input type={'text'} plc={'Degree'} text={'Degree'} />
                                    <Input type={'text'} plc={'Address'} text={'Adress'} />
                                    <Input type={'number'} plc={'Doctor fees'} text={'Fees'} min={'1000'} max={'3000'} />
                                </div>

                            </div>
                            <div className='aboutDoc'>
                                <label >About Doctor</label>
                                <textarea placeholder='write about doctor'>
                                </textarea>
                                <Buttom name={'Add Doctor'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
