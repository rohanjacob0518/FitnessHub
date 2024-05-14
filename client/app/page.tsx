import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Navbar } from "@/components/navbar";
import styles from "../styles/Home.module.scss";
import { GithubIcon } from "@/components/icons";
import './style.css'
// import videoplayback from '@/assets/videoplayback.mp4';	
import { Divider } from "@nextui-org/react";
import AboutPage from "./about/page";
import TrainerSignup from "./trainersignup/page";

export default function Home() {
	const videosrc = "https://youtu.be/IwFPIfrwaII?feature=shared";
	const footerNavs = [
        {
            href: '/trainerlogin',
            name: 'Trainer Login'
        },
        {
            href: '/login',
            name: 'User Login'
        },
        {
            href: '/adminlogin',
            name: 'Admin Login'
        },
        {
            href: '/sign-up',
            name: 'User Sign-Up'
        }
    ]
	return (
		<>
		
		<section className="flex flex-col items-center justify-center gap-0 py-0 md:py-0" style={{
			width:"100%",
			background:"tranperant"
		}}>
		{/* <section> */}
			<div style={{
				height:"240px",
				width:"100%",
				// backgroundColor:"blue",
				// backgroundImage:`url("https://i.pinimg.com/564x/fb/79/bb/fb79bb2743d553ddbcaad537f202fbd5.jpg")`,
				// height: "100v",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<video src={require('../assets/videoplayback.mp4')} autoPlay muted loop
			// className={styles.video}
			style={{
				// position:"absolute",
				// top:"0",
				// width:"100%",
				// objectFit:"cover",
				// zIndex:"-1"
			}}
			 />
				{/* <Navbar /><Divider/>  */}
			</div>
			<div className=" max-w-lg text-center justify-center" >
				<div style={{
					width:"100%",
					alignContent:"flex-start",
					// backgroundColor:"green"
					// backgroundImage:`url("https://i.pinimg.com/564x/76/c7/6a/76c76a7a19d36104ad013fe959f5f8ef.jpg")`,
					// maxWidth:"100%"
				}}>
				<h1 className={title()}>One Step&nbsp;</h1>
				<h1 className={title()} style={{color:"white"}}>Towards A Healthy Lifestyles&nbsp;</h1>
				<br /><br />
				<h2 className={subtitle({ class: "mt-4" })} style={{color:"white"}}>
					Healthy body is the secret of a healthy lifestyle. Start your day with fitness.
				</h2>
				</div>
			</div>

			<div className="" style={{
				alignItems:"end"
			}}>
				<Link
					isExternal
					href="/login"
					// href="http://localhost:3000/room"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
					Login
				</Link> &nbsp;
				<Link
					isExternal
					className={buttonStyles({ color:"primary", variant: "shadow", radius: "full",  })}
					href="/sign-up"
					>
					
					Sign Up
				</Link>
			</div>
		</section>
			<br /><br /><br /><br />
			<br /><br /><br /><br /><br /><br />
			<br /><br /><br /><br /><br /><br />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center" style={{

					width:"40%",
				}}>
				<AboutPage/>
				</div>
			</section>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" >
				<div className="inline-block text-center justify-center" 
				style={{
					width:"40%"
				}}>
				<h3 className={title()}>Become a</h3><br />
				<h2 className={title({ color: "green" })}>TRAINER With Us&nbsp;</h2>
				<br /> <br /><br />
				<TrainerSignup/>
				</div>
			</section>
        <footer className="pt-10" style={{
			backgroundColor:"grey"
		}}>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
						<center>

                        <p className="">
						We're excited to embark on this transformative experience with you, offering personalized support,
						expert guidance, and a vibrant community to empower your wellness goals.
						Together, let's unleash your full potential and achieve extraordinary results. Welcome aboard!
                        </p>
						</center>
                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            {
								footerNavs.map((item, idx) => (
									<li className="text-gray-800 hover:text-gray-500 duration-150">
                                        <a key={idx} href={item.href}  target="_blank">
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* <div className="mt-10 py-10 border-t md:text-center"> */}
                    {/* <p>© 2022 Float UI Inc. All rights reserved.</p> */}
					{/* <p>Integrated MCA Final project 2024</p> */}
                {/* </div> */}
				<div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p className="text-gray-600">© Integrated MCA Final Year project 2024.</p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6">
					<a href="https://www.facebook.com/rohanjacobRJ2001/" target="_blank">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clip-path="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                        <a href="https://github.com/rohanjacob0518" target="_blank">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                        <a href="https://twitter.com/rohanjacobRJ" target="_blank">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g fill="currentColor" clip-path="url(#clip0_910_44)"><path fill-rule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z" clip-rule="evenodd" /><path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" /></g><defs><clipPath id="clip0_910_44"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/rohan-jacob-654252195/" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-6 h-6 hover:text-gray-500 duration-150" viewBox="0 0 16 16">
						<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
						</svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
					</>
	);
}
