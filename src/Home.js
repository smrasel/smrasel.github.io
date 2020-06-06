import React from 'react';
import logo from './circle.svg';
import eko from './eko.svg';

import One from './1.png';
import Two from './2.png';
import Three from './3.png';
import Four from './4.png';
import Five from './5.png';
import Six from './6.png';
import Seven from './7.png';
import Eight from './8.png';
import Nine from './9.png';
import Ten from './10.png';

import Note1 from './note-1.png';
import Note2 from './note-2.png';
import Note3 from './note-3.png';
import Note4 from './note-4.png';
import Note5 from './note-5.png';
import Note6 from './note-6.png';

import './App.css';


import Slider from 'react-animated-slider';
import content from './content';


function Home() {
  return <>
        
		
		
    <section className="my-role">
			<div className="brand-logo">
				<img src={logo} alt="..." className="App-logo" height="32" />
				<img src={eko} alt="..." width="" height="" />  
			</div>
		
		<h2>Design Exercise</h2>
		    <h3>Goals</h3>
		    <p>Eko has determined how to connect people in different locations and help them
		work better together. With Eko call “we can see holograms of our colleagues beamed
		into space in front of us in a conference room,” said CTO of Eko. Design a mobile app
		user interface that allows users to connect people in different locations by showing
		their holograms beamed into a conference room.</p>
		    
				<p>Creating a user-friendly mobile app with simple UI that will make it really easy for people to find folks they share the 
					same interests with and have a blast together. The idea is to make people believe work better together that their colleagues are in front of them using top notch technology.</p>
    
		    
				<h3>Assumption</h3>
				<p>As I did not get any details along with acceptance criteria but I would like to assumed few points for the shake of simplicity of design exercise.</p>
				<ul>
					<li>List of user/people/colleagues data in place by default.</li>
					<li>By CTO statement, I came to know that conference room is nothing but the location.
and each conference room will treated as different locations. </li>
					<li>I assumed conference room is well equipped with holograms beamed technology 
and eko mobile application/technology software is tightly integrated with holograms projection device.
Like English science fiction movies ex: Iron man, Mission impossible etc.</li>
					<li>By the example of design exercise assumed connect people live (online) not offline. 
So live holograms beamed into space in a conference room.</li>
<li>Also consider company is top notch Software company and all the user of the said app is very power user.</li>
				</ul>


				<h3>Approach</h3>
		    <p>I focused on making the app as easy as possible to use. consedering curernt application UI So it actually includes 
					<b> figure 3</b> to <b>figure 9</b> only. Figure 3 showing list of people in place already as I said in assumed 
					section. and <b>Tanya Palitsina</b> is trying to connect <b>David Zhang</b> for hologram call 
					 <b>Figure 4</b> people’s profiles. <b>Figure 5</b> is about call details modal. <b>Figure 6</b> is Ringing screen
					 From  <b>Figure 7 Tanya Palitsina</b> can save hologram record for archive and share. <b>Figure 8</b> is showing saved hologram record</p>

				

		    <h3>Results</h3>
		    <p>I ended up with a pretty clean mobile app design, but it’s only the first version. I’ll do my best to make it not only user-friendly but also useful to break the ice and bring people together. Peace!</p>
<div className="m-auto">
				<div className="height">
    {/* <AwesomeSlider>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider> */}

			<Slider duration={1000}>
				<img src={One} />
				<img src={Two} />
				<img src={Three} />
				<img src={Four} />
				<img src={Five} />
				<img src={Six} />
				<img src={Seven} />
				<img src={Eight} />
				<img src={Nine} />
				<img src={Ten} />
			</Slider>

			{/* <Slider>
				{content.map((item, index) => (
					<div
						key={index}
						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="center">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button>{item.button}</button>
						</div>
					</div>
				))}
			</Slider> */}
    </div>
		</div>

				<h3>Knowledge I gather during design exercise</h3>
				<p><strong>What is a Hologram?</strong><br />A hologram is a 3D image that can be seen by the naked eye. Like 2D photographs, holograms mirror real-life visuals by reflecting light in a specific way. The main difference is that holograms allow light to reflect in a three-dimensional manner with the use of laser projection technology.</p>
				<p>A digital hologram is a form of Augmented Reality (AR), which presents computer-generated elements within the real world. As a result, holographic images look incredibly life-like. If you walk around one, the hologram will appear to be real, maintaining 3D-visuals from every angle.</p>

				
				<p><strong>How Does a Hologram Conference Work?</strong><br />Many conferences are making use of holograms these days in the following ways:</p>
				<ul>
					<li>Showcasing remote keynote speakers</li>
					<li>Combining real-life and holographic presenters on one stage</li>
					<li>Displaying new product lines and merchandise</li>
					<li>Featuring interactive art displays and branded decor</li>
				</ul>

				<strong>Why Use A Hologram Presentation and Benefits?</strong>
				<ul>
					<li>Fun, and engaging for your attendees.</li>
					<li>They allow presenters to reach audiences remotely from distant locations.</li>
					<li>Most importantly, holograms enhance audience engagement due to people’s fascination with them.</li>
					<li>They give your speakers access to a broader audience.</li>
					<li>They’re a convenient medium for speakers with busy schedules.</li>
					<li>They need to remain close to home for family</li>
					<li>Hologram Conferences: The New Conference Norm</li>
				</ul>

				<h3>Mobile common patterns</h3>

		    <p><strong>Splash screen</strong><br />A splash screen is the first screen you see when you launch a mobile application. Basically, they were invented to conceal the loading process that software performs before getting fully ready, like with computer games intros.</p>
		    <p><strong>Design A Good Onboarding Experience</strong><br />In the context of the mobile UX, delivering an excellent onboarding experience is the foundation for retaining users. The goal of onboarding is to show the value your app provides. And, it goes without saying, show onboarding to first-time users, not to the returning ones.</p>
		    <p><strong>Home screens</strong><br />The home screen is the main component of a mobile application presenting its menu and key features. An accessible and functional mobile menu is among the things that make me want to keep an app in the first place. It’s imperative for designers to make an effort to present users with understandable and functional main screen design.</p>
		    
				<h3>My way of work and Role</h3>
				<p><strong>My Role</strong><br />Interviewing, Customer Journey Maps, brainstorming, wireframing, creating mock-ups</p>
		    <p><strong>Interviews</strong><br />I started by interviewing clients, trying to understand their journey of moving to application. I asked open-ended questions trying to understand their pain points and emotions in the journey. I kept an open mind and listened to their stories carefully.</p>
		    <p><strong>Customer Journey Maps</strong><br />Based on the information provided by my interviewees, I created customer journey map to map out various aspects of their journey and tried to identify design opportunities.</p>
		    <p><strong>Brainstorming</strong><br />Then I brainstormed scenarios that address the pain points of the new user and created a preferred journey map. I narrowed down the number of scenarios from 5 to 3 and created various wireframes imagining how the website/SPA can help the clients.</p>
		    <p><strong>Wireframing</strong><br />I proceeded to designing all of the wireframes of website/SPA, for both desktop and mobile devices.</p>
		    <p><strong>Mocking-Up</strong><br />Based on the wireframes, I created the high-fidelity mock-ups for website/SPA.</p>

				<img src={Note1} width="200" height="267" alt="" />
				<img src={Note2} width="200" height="267" alt="" />
				<img src={Note3} width="200" height="267" alt="" />
				<img src={Note4} width="200" height="267" alt="" />
				<img src={Note5} width="200" height="267" alt="" />
				<img src={Note6} width="200" height="267" alt="" />

				<h3>Tools, UI library and technology I use</h3>
				<ul>
					<li>Various Pen and paper</li>
					<li>Note book</li>
					<li>Sketch and draw</li>
					<li>HTML and CSS</li>
					<li>React Js</li>
					<li>iPhone</li>
				</ul>


				<h3>Thank you 🙏</h3>
    </section>
    
  </>;
}
export default Home;