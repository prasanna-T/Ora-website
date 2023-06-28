import React from 'react'
import Chatbot from'react-simple-chatbot'
import { Segment } from 'semantic-ui-react'
import '../App.css';
import vid from './oravid.mp4'

function Chatbots() {
    const steps =[
        {
            id:'Greet',
            message:'Hello Buddy!',
            trigger:'Ask Name',
        },
        {
            id:'Ask Name',
            message:'Please Enter Your Name',
            trigger:'waiting1',
        },
        {
            id:'waiting1',
            user: true,
            trigger: 'Name',
        },
        {
            id:'Name',
            message:'Hi {previousValue}, Select your Query',
            trigger: 'query',
        },
        {
            id:'query',
            options: [
                {value: 'q1', label: 'What is on-road assistance?', trigger: 'q1'},
                {value: 'q2', label: 'What are some common situations that on-road assistance can help with?', trigger: 'q2'},
                {value: 'q3', label: 'How do I request on-road assistance?', trigger: 'q3'},
                {value: 'q4', label: 'How long does it usually take for on-road assistance to arrive?', trigger: 'q4'},
                {value: 'q5', label: 'Is on-road assistance available 24/7?', trigger: 'q5'},
                {value: 'q6', label: 'Is there a limit to the number of times I can use on-road assistance?', trigger: 'q6'},
                {value: 'q7', label: 'Do I have to pay for on-road assistance?', trigger: 'q7'},
                {value: 'q8', label: 'What should I do while waiting for on-road assistance to arrive?', trigger: 'q8'},
                {value: 'vid', label: 'Play Video', trigger: 'vid'},
                {value: 'end', label: 'End Chat', trigger: 'end'},
            ],
        },
        {
            id:'q1',
            message:'On-road assistance is a service provided by companies or organizations that help drivers with unexpected situations while driving, such as flat tires, dead batteries, running out of fuel, and more.',
            trigger: 'query',
        },
        {
            id:'q2',
            message:'Some common situations that on-road assistance can help with include flat tires, dead batteries, running out of fuel, locked keys in the car, and mechanical breakdowns.',
            trigger: 'query',
        },
        {
            id:'q3',
            message:"You can request on-road assistance by calling the provider's customer service number or using their mobile app. Some providers also offer automatic detection of an issue and will proactively dispatch assistance to you.",
            trigger: 'query',
        },
        {
            id:'q4',
            message:'The response time for on-road assistance can vary depending on factors such as your location, traffic, and the availability of service providers. However, most providers strive to arrive within 30-60 minutes.',
            trigger: 'query',
        },
        {
            id:'q5',
            message:"Yes, most on-road assistance providers offer 24/7 service, which means you can get help whenever you need it, even if it's in the middle of the night or on a holiday.",
            trigger: 'query',
        },
        {
            id:'q6',
            message:'The number of times you can use on-road assistance may vary depending on your provider and the type of plan you have. Some providers offer unlimited usage, while others have a limit on the number of service calls you can make within a certain period.',
            trigger: 'query',
        },
        {
            id:'q7',
            message:'Yes, on-road assistance usually comes with a fee, either as a one-time charge or as part of a membership or subscription plan. The cost may vary depending on the provider, the level of coverage you choose, and other factors.',
            trigger: 'query',
        },
        {
            id:'q8',
            message:"While waiting for on-road assistance to arrive, it's important to stay safe and visible to other drivers. If possible, move your vehicle to a safe location off the road and turn on your hazard lights. You may also want to wait inside your car with the doors locked until help arrives.",
            trigger: 'query',
        },
        {
            id:'vid',
            component: (
                <div> <video width="150" height="100" controls autoplay="true" >
                <source src={vid} type="video/mp4"/>
               </video> </div>
              ),
            end:true
        },
        {
            id:'end',
            message: "Nice to chat with you! Bye...",
            end:true
        }
    ];
  return (
    <div className='chatb'>
        <center>
        <Segment floated='right'>
            <Chatbot speechSynthesis={{ enable: true, lang: 'en' }}  recognitionEnable={true} steps={steps}/>
        </Segment>
        </center>
    </div>
  )
}

export default Chatbots