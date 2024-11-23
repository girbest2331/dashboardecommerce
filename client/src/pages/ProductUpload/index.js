import { Breadcrumbs, Button, Chip, emphasize, Select, styled } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Rating from '@mui/material/Rating';
import { FaCloudUploadAlt, FaRegImages } from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5"
import {LazyLoadImage} from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

//breadcumb code
const StyledBreadcrumb = styled(Chip)(({theme}) => {
    const backgroundColor =
      theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800]

return{
    backgroundColor,
    height: theme.spacing(3),
    color:  theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus':{
        backgroundColor: emphasize(backgroundColor,0.06),
    },
    '&:active':{
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor,0.12),
    },
}
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps:{
        styled:{
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width:250,
        },
    },
}

const ProductUpload = () =>{

  const [categoryVal, setCategoryVal] = useState('')
  const [subCatVal, setSubCatVal] = useState('')
  const [ratingsValue,setRatingsValue] = useState(1)
  const [productRams,setProductRAMS] = useState([])
 

  const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };

  const handleChangeProductRams = (event) =>{ 
    const {
    target: {value},
    } = event;
    setProductRAMS(
        //on autofill we get a stringifield value.
        typeof value === 'string' ? value.split(',') : value, 
    )
}

    return(
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 className="mb-0">Product Upload</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small"/>}

                        />
                        <StyledBreadcrumb
                            component="a"
                            label="Products"
                            href="#"
                            deleteIcon={<ExpandMoreIcon/>}
                        />
                        <StyledBreadcrumb
                            label="Product Upload"
                            deleteIcon={<ExpandMoreIcon/>}
                        />
                    </Breadcrumbs>
                </div>
                <form className="form">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card p-4 mt-0">
                                <h5 className="mb-4">Basic Information</h5>
                                <div className="form-group">
                                    <h6>PRODUCT NAME</h6>
                                    <input type="text" name="name"/>
                                </div>
                                <div className="form-group">
                                    <h6>DESCRIPTION</h6>
                                    <textarea rows={5} cols={10}/>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <div className="form-group">
                                        <h6>CATEGORY</h6>
                                        <Select
                                        
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className="w-100"
                                            >
                                            <MenuItem value="">
                                                <em value={null}>None</em>
                                            </MenuItem>
                                            <MenuItem className="text-capitalize">MEN</MenuItem>
                                            <MenuItem className="text-capitalize">women</MenuItem>
                                            <MenuItem className="text-capitalize">kids</MenuItem>
                                        </Select>
                                        </div>
                                    </div>
                                    <div className="col">
                                    <div className="form-group">
                                        <h6>SUB CATEGORY</h6>
                                        <Select
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className="w-100"
                                            >
                                            <MenuItem value="">
                                                <em value={null}>None</em>
                                            </MenuItem>
                                            <MenuItem className="text-capitalize">Jeans</MenuItem>
                                            <MenuItem className="text-capitalize">Shirts</MenuItem>
                                        </Select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRICE</h6>
                                            <input type="text" name="price"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>OLD PRICE</h6>
                                            <input type="text" name="oldprice"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6 className="text-uppercase">is Featured</h6>
                                            <Select
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            className="w-100"
                                            >
                                            <MenuItem value="">
                                                <em value={null}>None</em>
                                            </MenuItem>
                                            <MenuItem value={true}>True</MenuItem>
                                            <MenuItem value={false}>False</MenuItem>
                                        </Select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRODUCT STOCK</h6>
                                            <input type="text" name="countInStock"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>BRAND</h6>
                                            <input type="text" name="brand"/>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>DISCOUNT</h6>
                                            <input type="text" name="discount"/>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>PRODUCT RAMS</h6>
                                            <Select
                                            multiple
                                            value={productRams}
                                            onChange={handleChangeProductRams}
                                            displayEmpty
                                            className="w-100"
                                            MenuProps={MenuProps}
                                            >
                                            <MenuItem value="4GB" >4GB</MenuItem>
                                            <MenuItem value="8GB">8GB</MenuItem>
                                            <MenuItem value="10GB">10GB</MenuItem>
                                            <MenuItem value="12GB">12GB</MenuItem>
                                        </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <h6>RATING</h6>
                                            <Rating
                                                name="simple-controlled"
                                            />    
                                        </div>
                                    </div>
                                </div>
                                                                    
                                </div>

                                
                                
                                </div>
                                </div>
                                <div className="card p-4 mt-0">
                                        <div className="imagesUploadSec">
                                            <h5 className="mb-4">Media And Published</h5>
                                            <div className="imgUploadBox d-flex align-items-center">


                                                <div className="uploadBox">
                                                    <span className="remove"><IoCloseSharp/></span>
                                                    <div className="box">
                                                        <LazyLoadImage
                                                            alt={"image"}
                                                            effect="blur"
                                                            className="w-100"
                                                            src={'https://mironcoder-hotash.netlify.app/images/product/single/01.webp'}/>
                                                    </div>
                                                </div>


                                                <div className="uploadBox">
                                                    <input type="file" multiple name="images"/>
                                                    <div className="info">
                                                        <FaRegImages/>
                                                        <h5>image upload</h5>
                                                    </div>

                                                </div>
                                            </div>
                                <br/>
                                <Button type="button" className="btn-blue btn-lg btn-big w-100"
                                ><FaCloudUploadAlt/> &nbsp;PUBLISH AND VIEW</Button>
                            </div>
                        </div>
                </form>
            </div>  
              
        </>
    )
}

export default ProductUpload