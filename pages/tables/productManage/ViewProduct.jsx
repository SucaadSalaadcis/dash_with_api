
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { Link } from 'react-router-dom'
import RefreshPage from '../../../src/RefreshPage'
import { IoIosLogOut } from 'react-icons/io'
import Logout from '../../examples/Logout'

import axiosPublicURL from '../../../src/hooks/AxiosHook'
import Cookies from 'js-cookie'

import { BrandLogo, Content_Header, Footer, Navbar, SearchForm, UserPanel } from '../reusible/Sidebar'


export default function VeiwProduct() {

    const getToken = () => {
        return Cookies.get('token');
    };

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [commission, setCommission] = useState("");

    const useAxios = axiosPublicURL();

    const params = useParams();
    const navigate = useNavigate();


    // get single data 
    const handleSingleData = () => {
        useAxios.get(`api/v1/products/${params.id}/edit`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
            setName(res.data.data.name);
            setPrice(res.data.data.price);
            setCommission(res.data.data.commission);
            setId(res.data.data.id);
            // console.log(res.data.data.title);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        handleSingleData();
    }, []);





    return (
        <div class="hold-transition sidebar-mini">
            <div class="wrapper">
                {/* <!-- Navbar --> */}
                <Navbar navImg1={'../../dist/img/user1-128x128.jpg'} navImg2={'../../dist/img/user8-128x128.jpg'} navImg3={'../../dist/img/user3-128x128.jpg'} />
                {/* <!-- /.navbar --> */}

                {/* <!-- Main Sidebar Container --> */}
                <aside class="main-sidebar sidebar-dark-primary elevation-4">

                    {/* <!-- Brand Logo --> */}
                    <BrandLogo />

                    <div className="sidebar">
                        {/* userPanel */}
                        <UserPanel />

                        {/* sidebarSearch Form  */}
                        <SearchForm />

                        {/* <!-- Sidebar Menu --> */}
                        <nav class="mt-2">
                            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* <!-- Add icons to the links using the .nav-icon class
                                   with font-awesome or any other icon font library --> */}

                                <li class="nav-item"><Link to={'/'} onClick={RefreshPage} class="nav-link"><i class="nav-icon fas fa-tachometer-alt"></i><p>Dashboard</p></Link></li>

                                <li class="nav-item"><a href="#" class="nav-link"><i class="nav-icon fas fa-table"></i><p>UserManagement<i class="fas fa-angle-left right"></i></p></a>

                                    <ul class="nav nav-treeview">

                                        <li class="nav-item"><Link to={'/user-management/permission'} class="nav-link"><i class="far fa-circle nav-icon"></i><p>Permissions</p></Link></li>
                                        <li class="nav-item"><Link to={'/user-management/roles'} class="nav-link"><i class="far fa-circle nav-icon"></i><p>Roles</p></Link></li>
                                        <li class="nav-item"><Link to={'/user-management/users'} class="nav-link"><i class="far fa-circle nav-icon"></i><p>Users</p></Link></li>

                                    </ul>

                                </li>

                                <li class="nav-item"><Link to={'/products'} class="nav-link active"><i class="nav-icon fas fa-tree"></i><p>Products</p></Link></li>
                                <li class="nav-item"><Link to={'/customers'} class="nav-link"><i class="far fa-user nav-icon"></i><p>Customer</p></Link></li>
                                <li class="nav-item"><Link to={'/agents'} class="nav-link"><i class="nav-icon far fa-plus-square"></i><p>Agent</p></Link></li>
                                <li class="nav-item"><Link to={'/orders'} class="nav-link "><i class="nav-icon fas fa-ellipsis-h"></i><p>Order</p></Link></li>

                                <li class="nav-item">
                                    <a class="nav-link">
                                        <IoIosLogOut style={{ color: "white", fontSize: "20px", marginLeft: '5px' }} />
                                        <p style={{ cursor: 'pointer' }}><Logout /></p>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                        {/* <!-- /.sidebar-menu --> */}
                    </div>
                    {/* <!-- /.sidebar --> */}
                </aside>

                {/* <!-- Content Wrapper. Contains page content --> */}
                <div class="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                    <Content_Header title={'Veiw Products'} link={'Home'} />

                    {/* <!-- Main content --> */}
                    <section class="content pt-5 pb-5">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                {/* <!-- left column --> */}
                                <div class="col-md-8">
                                    {/* <!-- Horizontal Form --> */}
                                    <div class="card card-danger">
                                        <div class="card-header">
                                            <h3 class="card-title">Product View Form</h3>
                                        </div>

                                        {/* <!-- form start --> */}
                                        <form class="form-horizontal">
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">ID :</label>
                                                    <div class="col-sm-6">
                                                        <input value={id} onChange={(e) => setId(e.target.value)}
                                                            type="text" class="form-control" id="inputName3" placeholder="id" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Name :</label>
                                                    <div class="col-sm-6">
                                                        <input value={name} onChange={(e) => setName(e.target.value)}
                                                            type="text" class="form-control" id="inputName3" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Price :</label>
                                                    <div class="col-sm-6">
                                                        <input value={price} onChange={(e) => setPrice(e.target.value)}
                                                            type="text" class="form-control" id="inputName3" placeholder="Price" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Commission :</label>
                                                    <div class="col-sm-6">
                                                        <input value={commission} onChange={(e) => setCommission(e.target.value)}
                                                            type="text" class="form-control" id="inputName3" placeholder="Commission" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- /.card --> */}

                                </div>

                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                    </section>
                    {/* <!-- /.content --> */}

                </div>
                {/* <!-- /.content-wrapper --> */}

                {/* footer */}
                <Footer />

            </div>
            {/* <!-- ./wrapper --> */}


        </div>
    )
}
