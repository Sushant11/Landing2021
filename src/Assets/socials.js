import { FaFacebook, FaInstagram, FaDribbble,FaMediumM, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Socials = [
    {
        name: 'Instagram',
        key: 'ig',
        icon: <FaInstagram/>,
        link: 'https://www.instagram.com/sus.chtre/'
    },{
        name: 'Facebook',
        key: 'fb',
        icon: <FaFacebook/>,
        link: 'https://www.facebook.com/SuS.Chitrakar/'
    },{
        name: 'Dribble',
        key: 'dr',
        icon: <FaDribbble/>,
        link: 'https://dribbble.com/Chtre'
    },{
        name: 'Medium',
        key: 'md',
        icon: <FaMediumM/>,
        link: 'https://sushantchitrakar.medium.com/'
    },{
        name: 'LinkedIn',
        key: 'li',
        icon: <FaLinkedinIn/>,
        link: 'https://www.linkedin.com/in/sushant-chitrakar/'
    },{
        name: 'Github',
        key: 'gh',
        icon: <FaGithub/>,
        link: 'https://github.com/Sushant11'
    },
]
export default Socials