import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-link_div'>
                    <h4>Quick Links</h4>
                    <a href='/' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Home</p>
                    </a>
                    <a href='/about' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>About</p>
                    </a>
                    <a href='/product' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Product</p>
                    </a>
                    <a href='/review' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Review</p>
                    </a>
                    <a href='/contact' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Contact</p>
                    </a>
                </div>
                <div className='sb_footer-link_div'>
                    <h4>Extra Links</h4>
                    <a href='/signIn' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Login</p>
                    </a>
                    <a href='/Cart' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Cart</p>
                    </a>
                </div>
                <div className='sb_footer-link_div'>
                    <h4>Location</h4>
                    <a href='/india' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>India</p>
                    </a>
                    <a href='/usa' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>USA</p>
                    </a>
                    <a href='/japan' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Japan</p>
                    </a>
                    <a href='/america' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>America</p>
                    </a>
                </div>
                <div className='sb_footer-links_div' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                    <h4>Contact</h4>
                    <a href='/+9008005454' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>+9008005454</p>
                    </a>
                    <a href='/example@gmail.com' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Example@gmail.com</p>
                    </a>   
                    <a href='/chennai,india' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                        <p>Chennai,India</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Coming Soon On</h4>
                    <div className='socialmedia' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                    <a href="/facebook" style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                    <i className="fa fa-facebook"/>FaceBook</a>
                    <a href="instagram" style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                    <i className="fa fa-instagram"/> Instagram</a>
                    <a href="twitter" style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                    <i className="fa fa-twitter"/>Twitter</a>   
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb_footer-below-links'>
              <a href='/terms' style={{
                        textDecoration:'none',
                        color:'black',
                    }}><div><p className='p'>Terms & Conditions</p></div></a>
              <a href='/privacy' style={{
                        textDecoration:'none',
                        color:'black',
                    }}><div><p className='p'>Privacy</p></div></a>
              <a href='/security' style={{
                        textDecoration:'none',
                        color:'black',
                    }}><div><p className='p'>Security</p></div></a>
              <a href='/cookies' style={{
                        textDecoration:'none',
                        color:'black',
                    }}><div><p className='p'>Cookies Declaration</p></div></a>
            </div>
        </div>
      
    </div>
  );
}
