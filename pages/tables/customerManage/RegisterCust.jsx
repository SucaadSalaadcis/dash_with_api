import { useState } from "react";
import toast from "react-hot-toast";

import axiosPublicURL from '../../../src/hooks/AxiosHook'
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/AuthSlice";

import Cookies from 'js-cookie';
import { BrandLogo, Content_Header, Footer, Navbar, SearchForm, UserPanel } from "../reusible/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import RefreshPage from "../../../src/RefreshPage";
import Logout from "../../examples/Logout";
import { IoIosLogOut } from "react-icons/io";


export default function RegisterCust() {


    const [fullname, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [agency_id, setagency_id] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const useAxios = axiosPublicURL();

    const getToken = () => {
        return Cookies.get('token');
    };
    // post
    const handlePost = async (e) => {
        e.preventDefault();
        const data = {
            fullname, phone, address, agency_id
        }

        const response = await useAxios.post("api/v1/customers", data, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.data) {
                toast.success('Registered Successfuly...')
                dispatch(setUserData([response.data]));
                navigate('/customers')
            }

        }).catch((error) => console.log(error));
    }


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

                                <li class="nav-item"><Link to={'/products'} class="nav-link"><i class="nav-icon fas fa-tree"></i><p>Product</p></Link></li>
                                <li class="nav-item"><Link to={'/customers'} class="nav-link active"><i class="far fa-user nav-icon"></i><p>Customer</p></Link></li>
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
                    <Content_Header title={'Customer'} link={'Home'} />

                    {/* <!-- Main content --> */}
                    <section class="content pt-5 pb-5">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                {/* <!-- left column --> */}
                                <div class="col-md-8">
                                    {/* <!-- Horizontal Form --> */}
                                    <div class="card card-info">
                                        <div class="card-header">
                                            <h3 class="card-title">Create Customer</h3>
                                        </div>

                                        {/* <!-- form start --> */}

                                        {/* <!-- form start --> */}
                                        <form class="form-horizontal">
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">FullName :</label>
                                                    <div class="col-sm-10">
                                                        <input value={fullname} onChange={(e) => setFullName(e.target.value)}
                                                            type="text" class="form-control" id="inputEmail3" placeholder="FullName" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Phone :</label>
                                                    <div class="col-sm-10">
                                                        <input value={phone} onChange={(e) => setPhone(e.target.value)}
                                                            type="text" class="form-control" id="inputEmail3" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Address :</label>
                                                    <div class="col-sm-10">
                                                        <input value={address} onChange={(e) => setAddress(e.target.value)}
                                                            type="text" class="form-control" id="inputEmail3" placeholder="Address" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Agency_id :</label>
                                                    <div class="col-sm-10">
                                                        <input value={agency_id} onChange={(e) => setagency_id(e.target.value)}
                                                            type="text" class="form-control" id="inputEmail3" placeholder="Agency_id" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer justify-content-between">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handlePost}>Create</button>
                                            </div>
                                            {/* <!-- /.card-footer --> */}
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
