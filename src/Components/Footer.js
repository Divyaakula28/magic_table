import React from 'react';
import { AiFillGithub,AiFillTwitterSquare,AiFillInstagram,AiOutlineMail,AiFillLinkedin} from "react-icons/ai";
import '../CSS/templates.css';

export default function Footer(){
    return(
        <footer>
            <div className='fotter'>
                <a href="https://github.com/Divyaakula28" className='git'>
                  <AiFillGithub  size="2x" />
                </a>
                <a href="https://twitter.com/DivyaAkula8" className='twitt'>
                  <AiFillTwitterSquare  size="2x" />
                </a>

                <a href="https://www.instagram.com/divvyakula/" className='inst'>
                  <AiFillInstagram  size="2x" />
                </a>
                <a href="mailto:divya2000akula@gmail.com" className='mail'>
                  <AiOutlineMail  size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/divyaakula28/" className='mail'>
                  <AiFillLinkedin  size="2x" />
                </a>
                
            </div>
            </footer>
    )
}