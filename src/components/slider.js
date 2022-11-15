import React from "react";
import "../App.css";
import { Icon } from '@iconify/react';

import PropTypes from 'prop-types';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  circle: {
    stroke: "url(#linearColors)",
  },
}));


function CircularProgressWithLabel(props) {
  const classes = useStyles({});
  return (

    <Box position="relative" display="inline-flex">
           <svg width="1" height="1">
            <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
              <stop offset="20%" stopColor="#b03ead" />
              <stop offset="90%" stopColor="#99a72e" />
            </linearGradient>
          </svg>
      <CircularProgress className="circular_progress" variant="determinate" {...props} style={{width:"60px", height:"75px", transform:"translate(unset)"}}  thickness={2} classes={{ circle: classes.circle }} />
    
      <Box
         sx={{
         
          left: '50%',
          bottom: 0,
          right: 0,
          
          
          display: 'flex',
          alignItems: 'center',
          background:"yellow"
          // justifyContent: 'center',
        }}
      >
        <Typography className="progress_text" variant="caption" style={{margin:"0 auto",  position: 'absolute',
          bottom: 55, marginLeft:"20px"}} component="div" color="white">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};



const Slider = () => {
    
   
    const [progress, setProgress] = React.useState(73);
    const [progress2, setProgress2] = React.useState(73);
    const [progress3, setProgress3] = React.useState(73);

    
    // React.useEffect(() => {
    //   const timer = setInterval(() => {
    //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     setProgress2((prevProgress2) => (prevProgress2 >= 100 ? 0 : prevProgress2 + 10));
    //     setProgress3((prevProgress3) => (prevProgress3 >= 100 ? 0 : prevProgress3 + 10));
    //   }, 800);
    //   return () => {
    //     clearInterval(timer);
    //   };
    // }, []);

    


  return (
    <>
      <div className="row justify-content-center m-0">
      <div className="col col-12 col-md-10 col-lg-6">
      <div
        id="carouselExampleCaptions"
        className="carousel slide m-auto shadow p-4"
        data-bs-ride="carousel"
      >
        
      
        
        <div className="carousel-inner">

            <div className="carousel-item active">
              <img width="100%" src="/bg.png" className="d-block w-100" alt="..." />
              <div className="d-flex justify-content-around pt-2" style={{position:"absolute", width:"100%", top:"0", color:"white"}}>
                  <div className="text-center">
                      <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>78</div>
                      <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>DAYS</p>
                  </div>
                  <div className="text-center">
                      <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>06</div>
                      <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>HOURS</p>
                  </div>
                  <div className="text-center">
                      <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>07</div>
                      <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>MINUTES</p>
                  </div>
                  <div className="text-center">
                      <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>08</div>
                      <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>SECONDS</p>
                  </div>
              </div>

              <div className="d-flex justify-content-end gap-5" style={{position:"absolute", width:"100%", top:"20%", right:"5%"}}>
              <Icon color="white" className="icons" style={{fontSize:"50px"}} icon="bx:share-alt" />
              <Icon color="red" className="icons" style={{fontSize:"50px"}} icon="ant-design:heart-filled" />
              </div>
            

              <div className="carousel-caption d-md-block w-100 pb-0" style={{left:"0", right:"0",}}>
              
              <div className="d-flex justify-content-around px-4 pt-4 cities_div">
              <h5>SHELTON STREET</h5>
              <h5>COVENT GARDEN</h5>
              <h5>LONDON</h5>
              <h5>WC2H</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center px-4">
                  <img className="logo" width="120px" height="25px" src="/logo.png" alt="" />
                  <div className="d-flex align-items-center">
                  <div>
                  <h5 className="united-kingdom" style={{letterSpacing:"2px", fontSize:"23px"}}>UNITED KINGDOM</h5>
                  <div className="united-kingdom" style={{letterSpacing:"5px", fontWeight: 600, fontSize:"20px"}}>5,000,000 GBP</div>
                  <p className="united-kingdom-para">#ZMKLW817</p>
                  </div>
                  <div>
                    {/* <CircularProgressWithLabel value={progress} thickness={2}  /> */}
                    
                    {/* <CircularProgress
                      thickness={4}
                      classes={{ circle: classes.circle }}
                      /> */}
                  </div>
                  {/* ==== */}
                  <CircularProgressWithLabel value={progress} />
                  {/* ====== */}

                  </div>
                  <div className="" style={{textAlign:"start"}}>
                  <h4 className="sotheby" style={{fontSize:"30px"}}>Sotheby's</h4>
                  <p style={{fontSize:"12px"}}>INTERNATIONAL REALITY</p>
              </div>
              </div>

              
              </div>


            </div>

            <div className="carousel-item">
              <img width="100%" src="/bg.png" className="d-block w-100" alt="..." />
              <div className="d-flex justify-content-around pt-2" style={{position:"absolute", width:"100%", top:"0", color:"white"}}>
                  <div className="text-center">
                      <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>78</div>
                      <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>DAYS</p>
                  </div>
                  <div className="text-center">
                      <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>06</div>
                      <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>HOURS</p>
                  </div>
                  <div className="text-center">
                      <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>07</div>
                      <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>MINUTES</p>
                  </div>
                  <div className="text-center">
                      <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>08</div>
                      <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>SECONDS</p>
                  </div>
              </div>

              <div className="d-flex justify-content-end gap-5" style={{position:"absolute", width:"100%", top:"20%", right:"5%"}}>
              <Icon color="white" className="icons" style={{fontSize:"50px"}} icon="bx:share-alt" />
              <Icon color="red" className="icons" style={{fontSize:"50px"}} icon="ant-design:heart-filled" />
              </div>
            

              <div className="carousel-caption d-md-block w-100 pb-0" style={{left:"0", right:"0",}}>
              
              <div className="d-flex justify-content-around px-4 pt-4 cities_div">
              <h5>SHELTON STREET</h5>
              <h5>COVENT GARDEN</h5>
              <h5>LONDON</h5>
              <h5>WC2H</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center px-4">
                  <img className="logo" width="120px" height="25px" src="/logo.png" alt="" />
                  <div className="d-flex align-items-center">
                  <div>
                  <h5 className="united-kingdom" style={{letterSpacing:"2px", fontSize:"23px"}}>UNITED KINGDOM</h5>
                  <div className="united-kingdom" style={{letterSpacing:"5px", fontWeight: 600, fontSize:"20px"}}>5,000,000 GBP</div>
                  <p className="united-kingdom-para">#ZMKLW817</p>
                  </div>
                  <div>
                    
                  </div>
                
                  <CircularProgressWithLabel value={progress2} />
                

                  </div>
                  <div className="" style={{textAlign:"start"}}>
                  <h4 className="sotheby" style={{fontSize:"30px"}}>Sotheby's</h4>
                  <p style={{fontSize:"12px"}}>INTERNATIONAL REALITY</p>
              </div>
              </div>

              
              </div>


            </div>

            <div className="carousel-item">
            <img width="100%" src="/bg.png" className="d-block w-100" alt="..." />
            <div className="d-flex justify-content-around pt-2" style={{position:"absolute", width:"100%", top:"0", color:"white"}}>
                <div className="text-center">
                    <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>78</div>
                    <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>DAYS</p>
                </div>
                <div className="text-center">
                    <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>06</div>
                    <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>HOURS</p>
                </div>
                <div className="text-center">
                    <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>07</div>
                    <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>MINUTES</p>
                </div>
                <div className="text-center">
                    <div className="times" style={{fontSize:"75px", letterSpacing:"10px"}}>08</div>
                    <p className="para" style={{fontSize:"18px", letterSpacing:"5px"}}>SECONDS</p>
                </div>
            </div>

            <div className="d-flex justify-content-end gap-5" style={{position:"absolute", width:"100%", top:"20%", right:"5%"}}>
            <Icon color="white" className="icons" style={{fontSize:"50px"}} icon="bx:share-alt" />
            <Icon color="red" className="icons" style={{fontSize:"50px"}} icon="ant-design:heart-filled" />
            </div>


            <div className="carousel-caption d-md-block w-100 pb-0" style={{left:"0", right:"0",}}>

            <div className="d-flex justify-content-around px-4 pt-4 cities_div">
            <h5>SHELTON STREET</h5>
            <h5>COVENT GARDEN</h5>
            <h5>LONDON</h5>
            <h5>WC2H</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center px-4">
                <img className="logo" width="120px" height="25px" src="/logo.png" alt="" />
                <div className="d-flex align-items-center">
                <div>
                <h5 className="united-kingdom" style={{letterSpacing:"2px", fontSize:"23px"}}>UNITED KINGDOM</h5>
                <div className="united-kingdom" style={{letterSpacing:"5px", fontWeight: 600, fontSize:"20px"}}>5,000,000 GBP</div>
                <p className="united-kingdom-para">#ZMKLW817</p>
                </div>
                <div>
                
                </div>
                
                <CircularProgressWithLabel value={progress3} />
              

                </div>
                <div className="" style={{textAlign:"start"}}>
                <h4 className="sotheby" style={{fontSize:"30px"}}>Sotheby's</h4>
                <p style={{fontSize:"12px"}}>INTERNATIONAL REALITY</p>
            </div>
            </div>

            
            </div>


            </div>

        </div>
       
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              // className="carousel-control-prev-icon"
              aria-hidden="true"
            ><Icon color="white" style={{fontSize:"100px"}} icon="material-symbols:arrow-left" /></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              // className="carousel-control-next-icon"
              aria-hidden="true"
            ><Icon color="white" style={{fontSize:"100px"}} icon="material-symbols:arrow-right" /></span>
            <span className="visually-hidden">Next</span>
          </button>


        <div className="carousel-indicators">
     
     <button
       type="button"
       data-bs-target="#carouselExampleCaptions"
       data-bs-slide-to="0"
       className="active carousel_indicator_btn"
       aria-current="true"
       aria-label="Slide 1"
     ></button>
     <button
     className="carousel_indicator_btn"
       type="button"
       data-bs-target="#carouselExampleCaptions"
       data-bs-slide-to="1"
       aria-label="Slide 2"
     ></button>
     <button
     className="carousel_indicator_btn"
       type="button"
       data-bs-target="#carouselExampleCaptions"
       data-bs-slide-to="2"
       aria-label="Slide 3"
     ></button>

<button
className="carousel_indicator_btn"
       type="button"
       data-bs-target="#carouselExampleCaptions"
       data-bs-slide-to="3"
    
       aria-current="true"
       aria-label="Slide 4"
     ></button>
     <button
     className="carousel_indicator_btn"
       type="button"
       data-bs-target="#carouselExampleCaptions"
       data-bs-slide-to="4"
       aria-label="Slide 5"
     ></button>
     <button
     className="carousel_indicator_btn"
       type="button"
       data-bs-target="#carouselExampleCaptions"
       data-bs-slide-to="5"
       aria-label="Slide 6"
     ></button>
       <button
       className="carousel_indicator_btn"
       type="button"
       data-bs-target="#carouselExampleCaptions"
       data-bs-slide-to="6"
       aria-label="Slide 7"
     ></button>
     <button
     className="carousel_indicator_btn"
       type="button"
       data-bs-target="#carouselExampleCaptions"
       data-bs-slide-to="7"
       aria-label="Slide 8"
     ></button>
        </div>
        </div> 

      </div>
      </div>
    </>
  );
};

export default Slider;
