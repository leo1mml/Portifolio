import React from 'react'
import SkillBar from '../Components/SkillBar'

class AboutMe extends React.Component {

    getAge = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    render() {
        return(
            <div className="aboutme__container">
                <div className="aboutme__intro">
                    <div className="aboutme__intro__photo"></div>
                    <div className="aboutme__intro__description">
                        <p>Hi, I’m a computer scientist, I am {this.getAge('1994/07/29')} years old, and you are very welcome in here. 
                            You should feel free to take a look at my jobs, 
                            ask me anything, or hire me :D</p>
                        <p>I graduated at the Catholic University of Brasilia(UCB), and became a student of the Apple Developer Academy. So I’m capable of building apps and games for iOS, macOS and watchOS. 	At the same time I’m at the apple developer academy, I was able to study some pretty cool javascript stuff, so I’m also able to make some nodeJS and ReactJS apps.
	As for my hobbies, I like to play the guitar 
    and sing, I also like to play video games and watch good movies!</p>
                    </div>
                </div>
                <div className="aboutme__skills">
                    <div className="aboutme__skills__title">
                        Skills & Abilities
                    </div>
                    <div className="aboutme__skills__skill-list">
                            <SkillBar skillName={"React"} badassPercentage={77}/>
                            <SkillBar skillName={"WatchOS"} badassPercentage={80}/>
                            <SkillBar skillName={"NodeJS"} badassPercentage={95}/>
                        
                            <SkillBar skillName={"iOS"} badassPercentage={95}/>
                            <SkillBar skillName={"macOS"} badassPercentage={80}/>
                            <SkillBar skillName={"Unity/C#"} badassPercentage={65}/>

                            <SkillBar skillName={"tvOS"} badassPercentage={82}/>
                            <SkillBar skillName={"Swift"} badassPercentage={95}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe