import { Breadcrumbs, Button, emphasize, styled} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import Chip from '@mui/material/Chip'
import Slider from "react-slick";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import UserAvatarImgComponent from "../../components/userAvatarImg";
import Rating from '@mui/material/Rating'
import { FaReply } from "react-icons/fa";
import { useRef } from "react";



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
const ProductDetails = ()=>{

    const productSliderBig = useRef()
    const productSliderSml = useRef()
    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
      var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false
      };

      const goToSlide=(index)=>{
        productSliderBig.current.slickGoTo(index)
        productSliderSml.current.slickGoTo(index)
      }
    
    return(
        <>
            <div className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 className="mb-0">Product View</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small"/>}

                        />
                        <StyledBreadcrumb
                            label="Products"
                            component="a"
                            href="#"
                        />
                        <StyledBreadcrumb
                            label="Product View"
                        />
                    </Breadcrumbs>
                </div>

                <div className="card productDetailsSection">
                <div className="row">
                    <div className="col-md-5">
                        <div className="slider-wrapper pt-3 pb-3 ps-4 pe-4">
                        <h6 className="mb-4">Product Galery</h6>
                        <Slider {...productSliderOptions} ref={productSliderBig} className="sliderBig mb-2">
                        <div className="item">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt=""
                            className="w-100"/>
                        </div>
                    </Slider>
                    <Slider {...productSliderSmlOptions} ref={productSliderSml} className="sliderSml">
                        <div className="item" onClick={()=>goToSlide(1)}>
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item" onClick={()=>goToSlide(2)}>
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item" onClick={()=>goToSlide(3)}>
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item" onClick={()=>goToSlide(4)}>
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item" onClick={()=>goToSlide(5)}>
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/06.webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item" onClick={()=>goToSlide(6)}>
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/07webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item" onClick={()=>goToSlide(7)}>
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/07webp" alt=""
                            className="w-100"/>
                        </div>
                        <div className="item" onClick={()=>goToSlide(8)}>
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/07webp" alt=""
                            className="w-100"/>
                        </div>
                    </Slider>

                        </div>
                    </div>
                    <div className="col-md-7">
                    <div className="pt-3 pb-3 ps-4 pr-4">
                       <h6 className="mb-4">Product Details</h6>
                       <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>

                       <div className="productInfo mt-4">
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><MdBrandingWatermark  /></span>
                                <span className="name">Brand</span>
                            </div>
                            <div className="col-sm-9">
                                 <span>Ecstasy</span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><BiSolidCategoryAlt  /></span>
                                <span className="name">Category</span>
                            </div>
                            <div className="col-sm-9">
                                 <span>Man's</span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><BiSolidCategoryAlt  /></span>
                                <span className="name">Tags</span>
                            </div>
                            <div className="col-sm-9">
                                 <span>
                                     <ul className="list list-inline tags sml">
                                        <li className="list-inline-item">
                                            <span>SUITE</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>PARTY</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>DRESS</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>SMART</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>MAN</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>STYLES</span>
                                        </li>
                                     </ul>
                                  </span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><BiSolidCategoryAlt  /></span>
                                <span className="name">Color</span>
                            </div>
                            <div className="col-sm-9">
                                 <span>
                               <ul className="list list-inline tags sml">
                                        <li className="list-inline-item">
                                            <span>RED</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>BLUE</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>WHITE</span>
                                        </li>
                                     </ul>
                                  </span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><BiSolidCategoryAlt  /></span>
                                <span className="name">Size</span>
                            </div>
                            <div className="col-sm-9">
                                <span>Man's</span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><BiSolidCategoryAlt  /></span>
                                <span className="name">Price</span>
                            </div>
                            <div className="col-sm-9">
                                 <span>370 DH</span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><BiSolidCategoryAlt  /></span>
                                <span className="name">Stock</span>
                            </div>
                            <div className="col-sm-9">
                                 <span>(68) Pieces</span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><BiSolidCategoryAlt  /></span>
                                <span className="name">Review</span>
                            </div>
                            <div className="col-sm-9">
                                 <span>(03) Review</span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                <span className="icon"><BiSolidCategoryAlt  /></span>
                                <span className="name">Published</span>
                            </div>
                            <div className="col-sm-9">
                                 <span>02 Feb 2025</span>
                            </div>
                        </div>

                       </div>
                    </div>   
                    </div>
                </div>
                
                <div className="p-4">
                    <h6 className="mt-4 mb-3">Product Desciption</h6>
                    <p>ldnkldklsndm;ml,sqdm,ùkqsdqs ùqld,qsl,dlqsdùmqld;;qd mlqd,ùqlkdsùdqsd;qd
                    qkmlqks,kqs,dklq,sdkmqs,dmqùsd;q,mlk,ùcml,dlmc,sdlcldl;clmd;scl;sdl,handleCl
                    lcknksdlncklds,ck,sdklc,klds,ck,sdc
                    kdnmlkdnklnfkld,lfm,sml;handleCloseMyAccDroplkqjlkqjcklsq,ck,
                    ldkckldc,kds,c
                    </p>

                    <br/>

                    <h6 className="mt-4 mb-4">Rating Analytics</h6>

                    <div className="ratingSection">
                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                            5 Star
                            </span>
                            <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'70%'}}></div>
                                </div>
                            </div>
                            <span className="col3">
                                (22)
                            </span>
                        </div>
                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                            4 Star
                            </span>
                            <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'50%'}}></div>
                                </div>
                            </div>
                            <span className="col3">
                                (22)
                            </span>
                        </div>
                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                            3 Star
                            </span>
                            <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'50%'}}></div>
                                </div>
                            </div>
                            <span className="col3">
                                (22)
                            </span>
                        </div>
                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                            2 Star
                            </span>
                            <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'20%'}}></div>
                                </div>
                            </div>
                            <span className="col3">
                                (22)
                            </span>
                        </div>
                        <div className="ratingrow d-flex align-items-center">
                            <span className="col1">
                            1 Star
                            </span>
                            <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'10%'}}></div>
                                </div>
                            </div>
                            <span className="col3">
                                (22)
                            </span>
                        </div>
                    </div>

                    <br/>

                    <h6 className="mt-4 mb-4">Customer Reviews</h6>
                    <div className="reviewsSecrion">
                        <div className="reviewsRow">
                            <div className="row">
                                <div className="col-sm-9 d-flex">
                                    <div className="d-flex flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                                    lg={true}/>

                                                <div className="info ps-3">
                                                    <h6>Miron Mahmoud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                        </div>
                                        <Rating name="read-only"value={4.5} precision={0.5} readOnly/>
                                    </div>


                                </div>
                                <div className="col-md-5 d-flex align-items-center">
                                <div className="ms-auto">
                                    <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/> &nbsp;Reply
                                    </Button>
                                </div>
                            </div>
                            </div>
                            
                            <p className="mt-3">mldùm,d ùq,dmlqs,dk lp,dùsq,ùxm ùkp,ùkqs cùmn q cùqslc,ùqs 
                                mklsnqklsqnxkl,ùlkx,qsx qk,qsù,xmsqlxk kùps,qslm xqsùlqs ùqspkx qsxlks 
                                clknqslkc,kql,cmq,clmqs;lm,qsùclqs,clq cùlc;mlq;cùmq;lm,mlsqd;lsqd
                                lqks,clkqs,mqs,q,smlqs,mlc;lqs;</p>
                        </div>
                        <div className="reviewsRow reply">
                            <div className="row">
                                <div className="col-sm-9 d-flex">
                                    <div className="d-flex flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                                    lg={true}/>

                                                <div className="info ps-3">
                                                    <h6>Miron Mahmoud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                        </div>
                                        <Rating name="read-only"value={4.5} precision={0.5} readOnly/>
                                    </div>


                                </div>
                                <div className="col-md-5 d-flex align-items-center">
                                <div className="ms-auto">
                                    <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/> &nbsp;Reply
                                    </Button>
                                </div>
                            </div>
                            </div>
                            
                            <p className="mt-3">mldùm,d ùq,dmlqs,dk lp,dùsq,ùxm ùkp,ùkqs cùmn q cùqslc,ùqs 
                                mklsnqklsqnxkl,ùlkx,qsx qk,qsù,xmsqlxk kùps,qslm xqsùlqs ùqspkx qsxlks 
                                clknqslkc,kql,cmq,clmqs;lm,qsùclqs,clq cùlc;mlq;cùmq;lm,mlsqd;lsqd
                                lqks,clkqs,mqs,q,smlqs,mlc;lqs;</p>
                        </div>
                        <div className="reviewsRow">
                            <div className="row">
                                <div className="col-sm-9 d-flex">
                                    <div className="d-flex flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                                    lg={true}/>

                                                <div className="info ps-3">
                                                    <h6>Miron Mahmoud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                        </div>
                                        <Rating name="read-only"value={4.5} precision={0.5} readOnly/>
                                    </div>


                                </div>
                                <div className="col-md-5 d-flex align-items-center">
                                <div className="ms-auto">
                                    <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/> &nbsp;Reply
                                    </Button>
                                </div>
                            </div>
                            </div>
                            
                            <p className="mt-3">mldùm,d ùq,dmlqs,dk lp,dùsq,ùxm ùkp,ùkqs cùmn q cùqslc,ùqs 
                                mklsnqklsqnxkl,ùlkx,qsx qk,qsù,xmsqlxk kùps,qslm xqsùlqs ùqspkx qsxlks 
                                clknqslkc,kql,cmq,clmqs;lm,qsùclqs,clq cùlc;mlq;cùmq;lm,mlsqd;lsqd
                                lqks,clkqs,mqs,q,smlqs,mlc;lqs;</p>
                        </div>
                        <div className="reviewsRow reply">
                            <div className="row">
                                <div className="col-sm-9 d-flex">
                                    <div className="d-flex flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                                    lg={true}/>

                                                <div className="info ps-3">
                                                    <h6>Miron Mahmoud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                        </div>
                                        <Rating name="read-only"value={4.5} precision={0.5} readOnly/>
                                    </div>


                                </div>
                                <div className="col-md-5 d-flex align-items-center">
                                <div className="ms-auto">
                                    <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/> &nbsp;Reply
                                    </Button>
                                </div>
                            </div>
                            </div>
                            
                            <p className="mt-3">mldùm,d ùq,dmlqs,dk lp,dùsq,ùxm ùkp,ùkqs cùmn q cùqslc,ùqs 
                                mklsnqklsqnxkl,ùlkx,qsx qk,qsù,xmsqlxk kùps,qslm xqsùlqs ùqspkx qsxlks 
                                clknqslkc,kql,cmq,clmqs;lm,qsùclqs,clq cùlc;mlq;cùmq;lm,mlsqd;lsqd
                                lqks,clkqs,mqs,q,smlqs,mlc;lqs;</p>
                        </div>
                    </div>
                    <br/>
                    <h6 className="mt-4 mb-4">Review Reply Form</h6>

                    <form className="reviewForm">
                        <textarea placeholder="write here">
                        </textarea>

                        <Button className="btn-blue btn-big btn-lg w-100 mt-4">drop your replies</Button>
                    </form>
                </div>
            </div>
            </div>

            
        </>
    )
}

export default ProductDetails