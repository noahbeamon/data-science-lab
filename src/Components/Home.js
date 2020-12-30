import React, { useState } from 'react';
import ReactMd from 'react-md-file';
import "./Home.css"; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import emailjs from 'emailjs-com';
import { AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiOrcid} from "react-icons/si";
import RecentsJSON from "./Recents.json";
import { MdSubtitles } from "react-icons/md";
import { IoIosCalendar, IoMdSearch } from "react-icons/io";
import { BiHash } from "react-icons/bi"; 

const Home = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState(""); 

    const[button1, setButton1] = useState('2px solid rgb(0, 0, 0, 1)');
    const[button2, setButton2] = useState('2px solid rgb(0, 0, 0, 1)');
    const[button3, setButton3] = useState('2px solid rgb(0, 0, 0, 1)');

    const[inputTitle, setInputTitle] = useState("");
    const[inputDescription, setInputDescription] = useState("");
    const[inputTags, setInputTags] = useState("");

    const[buttonColor, setButtonColor] = useState("rgba(46, 61, 130, 1)");

    function sendEmail(e) {
        if (name != "" && email != "" && message != ""){
            e.preventDefault();
    
            emailjs.sendForm('service_qsm1dle', 'template_4sqbn5u', e.target, 'user_WTkh9w5eegcbYe1z7Oo8u')
              .then((result) => {
                  console.log(result.text);
                  alert('We have notified the lab of your interest. Someone will send you an email if a response is neccessary.')
                  window.location.href = '/Home'; 
              }, (error) => {
                  console.log(error.text);
              });
        }else{
            alert("Please enter a name, email address, and description")
        }
      }

    return(
        <div className="App">
            {/* <div className="content-container">
                <ReactMd fileName="./Home.md" />
            </div> */}
            <Tabs style={{marginTop: 10}}>
                <TabList style={{display: "flex", alignItems: "left"}}>
                <Tab>General Info</Tab>
                <Tab>Resources</Tab>
                <Tab>Announcements</Tab>
                <Tab>Inquiries and Sugestions</Tab>
                </TabList>

                <TabPanel>
                    <div className="content-container">
                        <ReactMd fileName="./Home.md" />
                    </div>
                </TabPanel>
                <TabPanel>
                <p>Review recent activity or see the projects tab for more details.</p>
                <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <div className = "content-results-container">
                    <strong style={{fontSize: 25, marginBottom: 10}}>Recent</strong>
                        <div className="scroll-container">
                            {RecentsJSON.filter((val)=>{
                                if (inputTitle == "" && inputTags == "" && inputDescription == "") {
                                    return val; 
                                }else if (val.title.toLowerCase().includes(inputTitle.toLowerCase()) && val.tags.toLowerCase().includes(inputTags.toLowerCase()) && val.description.toLowerCase().includes(inputDescription.toLowerCase())) {
                                    return val; 
                                }
                            }).map((val, key)=>{
                                return (
                                <div style={{borderRadius: "5px", cursor: "pointer"}} className = "list-element"
                                onClick = {() => {
                                    window.open(val.url);  
                                }}
                                >
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div>
                                            <strong>{val.title}</strong>
                                            <p>{val.description}</p>
                                            <p>tags: {val.tags}</p>
                                        </div>
                                        <div style={{marginLeft: 10}}>
                                            <img style={{width: 250, borderRadius: 5}} src={val.photo}/>
                                        </div>
                                    </div>
                                        
                                </div>)
                            })}
                        </div>
                </div>
                </div>
                <div style={{justifyContent: "center", alignItems: "center", marginTop: 0}}>
                <div className = "content-filter-container-a">
                    <strong style={{fontSize: 25}}>Filter Recent Feed</strong>
                    <div style={{margin: 20}}>
                        <p>Title</p>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                <i className="fa fa-user prefix"><MdSubtitles/></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="title" value={inputTitle}
                            onChange={event => setInputTitle(event.target.value)}
                            />
                        </div>
                    </div>
                   <div style={{margin: 20}}>
                       <p>Keywords</p>
                    <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                <i className="fa fa-user prefix"><IoMdSearch/></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="description" value={inputDescription}
                            onChange={event => setInputDescription(event.target.value)}
                            />
                        </div>
                   </div>
                   <div style={{margin: 20}}>
                       <p>Tags</p>
                    <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                <i className="fa fa-user prefix"><BiHash/></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="tag" value={inputTags}
                            onChange={event => setInputTags(event.target.value)}
                            />
                        </div>
                   </div>
                   <div className="button" style={{backgroundColor: buttonColor, cursor: "pointer", borderRadius: 5, margin: 20}}
                            onMouseOver={() =>{
                                setButtonColor("rgba(46, 61, 130, 0.8)");
                            }}
                            onMouseLeave={() =>{
                                setButtonColor("rgba(46, 61, 130, 1)");
                            }}
                            onClick={() =>{
                                setInputTitle("");
                                setInputTags("");
                                setInputDescription("");
                                setButtonColor("rgba(46, 61, 130, 1)");
                            }}
                            >
                                <strong style={{color: "white"}}>Clear</strong>
                    </div>
                </div>
                <div>
                    <strong>Repositories and Databases</strong>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{border: button1, margin: 20, padding: 10, borderRadius: 5, cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}
                    onMouseOver={() => {
                        setButton1("2px solid rgb(0, 0, 0, 0.5)")
                    }}
                    onMouseLeave={() => {
                        setButton1("2px solid rgb(0, 0, 0, 1)")
                    }}
                    onClick={() => {
                        window.open('https://github.com/hshakeri'); 
                    }}
                    >
                        <AiFillGithub size={30} style={{marginRight: 10}}/>
                        <strong>Github</strong>
                    </div>
                    <div style={{border: button2, margin: 20, padding: 10, borderRadius: 5, cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}
                    onMouseOver={() => {
                        setButton2("2px solid rgb(0, 0, 0, 0.5)")
                    }}
                    onMouseLeave={() => {
                        setButton2("2px solid rgb(0, 0, 0, 1)")
                    }}
                    onClick={() => {
                        window.open('https://scholar.google.com/citations?user=zFIIhGMAAAAJ&hl=en'); 
                    }}
                    >
                        <SiGooglescholar size={30} style={{marginRight: 10}}/>
                        <strong>Google Scholar</strong>
                    </div>
                    <div style={{border: button3, margin: 20, padding: 10, borderRadius: 5, cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}
                    onMouseOver={() => {
                        setButton3("2px solid rgb(0, 0, 0, 0.5)")
                    }}
                    onMouseLeave={() => {
                        setButton3("2px solid rgb(0, 0, 0, 1)")
                    }}
                    onClick={() => {
                        window.open('https://orcid.org/0000-0002-9891-5748'); 
                    }}
                    >
                        <SiOrcid size={30} style={{marginRight: 10}}/>
                        <strong>ORCID</strong>
                    </div>
                </div>
                </div>
                </div>
                </TabPanel>
                <TabPanel>
                    <div style={{backgroundColor: "whitesmoke", marginLeft: 300, marginRight: 300, marginTop: 20, marginBottom: 20, paddingTop: 20, paddingBottom: 20, borderRadius: 5}}>
                        <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="HemanShakeri"
                        options={{height: 500, width: 500}}
                        />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <strong>Submit inquiries and suggestions, or report issues regarding our web applications here</strong>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div>
                                <label style={{margin: 10}}>Name:</label>
                                <input style={{margin: 10}} type="text" name="user_name" onChange={event => setName(event.target.value)}/>
                            </div>
                            <div>
                                <label style={{margin: 10}}>Email:</label>
                                <input style={{margin: 10}} type="email" name="user_email" onChange={event => setEmail(event.target.value)}/>
                            </div>
                            <label style={{margin: 10}}>Leave a message for our staff</label>
                            <div>
                                <textarea style={{width: 500, height: 200}} name="message" onChange={event => setMessage(event.target.value)}/>
                            </div>
                            <p>Upload a file</p>
                            <div>
                                <input style={{margin: 10}} type="file" name="user_file"></input>
                                <input style={{margin: 10}} type="submit" value="Send" />
                            </div>
                        </div>
                        
                    </form>
                    </div>


                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Home; 