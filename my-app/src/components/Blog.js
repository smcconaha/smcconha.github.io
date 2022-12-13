import React from 'react';

const Blog = () => {
    return (
        <div className = "container-fluid blog-section border border-dark">
            <div className ="row blog-row w-auto">
                <div className="col blog-col">
            <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Blog #1: First Week  (8/26/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <strong>Was your first week what you expected? Why? Why not?</strong>
                            <br></br> 
                                I came into the first week expecting the course load to be challenging; 
                                however, I did not anticipate needing so much time to learn the tools like 
                                GitHub and GitPod. I realize that I can be a slow learner, especially if the 
                                subject is brand new, so this really isn't that surprising. These are a few 
                                of the interesting things I learned about today: How to initiate a pull request 
                                on GitHub. This feature allows teams to work together and discuss changes without 
                                worrying about overwriting someone else's work. How the release based workflow operates. 
                                This is used to package and provide software to users at a particular point in time. 
                                The directions seemed a bit rushed for this part of the lesson and I would like to 
                                research this further. The ways you can track history on a commit, issue, or pull request.
                                This includes the secure hashtag algorithm. The differences between markup and 
                                markdown languages. That "git blame" is used to show revision history as well as the last author to modify a line of a file.
                            <br></br> 
                            <strong>What are you excited or eager to learn more about?</strong>
                            <br></br> 
                                I am eager to learn more about command line interface. I have played around with CLI 
                                on my computer as well as a few test environments but this weekend I plan to dig in a 
                                little further and break some things.
                            <br></br> 
                            <strong>What is something about you that can only be learned by reading this blog?</strong>
                            <br></br> 
                                I have a lot of hobbies and interests which makes it hard to narrow down the list but here 
                                goes. I enjoy experimenting with different types of art as well as drawing and painting. I 
                                took up wood carving roughly two years ago and have included pictures of one of my wood spirit 
                                carvings. From time to time I also like to pick up figurines from Goodwill and paint them 
                                to look like zombies. Sometimes I will even snag an old print and add my own spin on it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Blog #2: Second Week (9/02/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>What is something you wish you could do but currently do not have the coding skills to accomplish?</strong>
                            <br></br> 
                                For now I would really like to be able to create a nice looking website from scratch. I know I can make something 
                                now but it isn't visually appealing. There are so many components and currently I don't have "the eye" or possess 
                                the abilities to create something stylish. However, I am hopeful that I can develope those skills in time.
                            <br></br> 
                            <strong>What are you struggling with?</strong>
                            <br></br> 
                                I am really struggling with the amount of time required to cover the material. I write detailed notes and it is 
                                sometimes hard for me to differentiate the important material from the material that will come in time. I am sure 
                                that quality compounds the problem.
                            <br></br> 
                            <strong>How do you solve a problem?</strong>
                            <br></br> 
                                When it comes to problem solving, I like to fully understand the issue before I go into fix mode. A good example is 
                                if I am working on a car I don't just grab a wrench and go to town. I will do a test drive, visual inspection, 
                                and/or pull out some sort of diagnostic tool before starting work. I look at most other problems the same way, 
                                figure out what is wrong and then come up with a plan to repair or replace it. I am also probably slower than most, 
                                but I am methodical and walk away knowing it was done correctly.
                            <strong>What methods do you use to help yourself get unstuck?</strong>
                            <br></br> 
                                I am stubborn and when it comes to getting stuck I have been known to rack my brain for far too long before changing 
                                my strategy. Often I find it best to walk away from the issue and clear my head. Sometimes I can come up with creative
                                solutions or at least reduce the emotional charge. I also like to see how other people have solved similar situations 
                                and that can mean talking with someone about being stuck.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Blog #3: Third Week (9/09/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <strong>What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and 
                                    providing user experience?
                            </strong>
                            <br></br> 
                                It is interesting to see the interaction between HTML, CSS, and JavaScript. A good comparison would be the Ford 
                                Model-T, which originally was a no frills transportation method that only came in one color, black. Then Ford 
                                started to focus on appearance by offering body and interior color options as well as appearance trim packages. 
                                So now you can get from point A to B in style but what about air conditioning, self dimming headlights, windshield 
                                washers? Those came down the line and that functionality became important for auto manufacturers to consider if they
                                wanted to stay in business.
                                HTML is that bare-bones structure that can likely get you where you need to go on it's own, but we can add style 
                                with CSS and make it more attractive. That is a great place to be in but then JavaScript takes it a step further 
                                by allowing you to add functionality. HTML, CSS, and JavaScript all play an integral role in the user experience.
                            <br></br> 
                            <strong>What are some objects that your blog incorporates?</strong>
                            <br></br> 
                                I would consider the header and body of each blog to be individual objects or on a larger scale, the pages 
                                (i.e., index, weekone, weektwo, and this file). I can imagine writing script for these items in order to add depth.
                                I suppose I could also think in terms of some of subjects like, my favorite things.
                            <br></br> 
                            <strong>What are your thoughts on pseudocoding?</strong>
                            <br></br> 
                                I used to wondered how someone could convert an idea or even a customer requirement into code. It always seemed 
                                like such an intimidating process, but now I can see a little more clearly with pseudocode. I can see value in the 
                                process and look forward to learning better techniques.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Blog #4: Fourth Week (9/16/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                        <div className="accordion-body">
                            <strong>What was helpful during Onboarding working remotely?</strong>
                            <br></br> 
                                The thing I found most useful was the daily stand-ups. When I first learned that we were doing stand-ups, I had 
                                flashbacks of my previous job where we had daily stand-ups while working remotely. Honestly, I had a bit of a bad taste 
                                in my mouth prior to this because it felt more like the boss checking in on everyone.
                                I was glad to see that these stand-ups where different and that we had a platform to discuss our challenges and things 
                                that we learned. Stand-ups were beneficial and forever changed my way of thinking.
                            <br></br> 
                            <strong>What hindered your progress during Onboarding?</strong>
                            <br></br> 
                                The thing that hindered me the most is my study methods. I have a difficult time understanding what is important in 
                                the material or to be more specific, it all seems important. So I end up taking notes on every little thing, writing 
                                exampled, and then playing with the code (if applicable). It definitely concerns me that on most weeks I put in 
                                around 50-60 hours on the material. Another thing that hindered me was differentiating a challenge from a blocker 
                                and knowing when to walk away. Thirty minutes of failing to understand the issue could result in hours spent trying 
                                to figure out what I am doing wrong. That certainly rang true this week and I am hopeful that I can overcome this 
                                issue in person.
                            <br></br> 
                            <strong>How did you overcome challenges during Onboarding?</strong>
                            <br></br> 
                                If the challenge was material related I would typically look up additional resources or sometimes it was nice to 
                                watch a video explanation. That being said, there were definitely times when I should have leaned more heavily on 
                                the help channel. I also felt some of the challenges associated with imposter syndrome. When those thoughts occur 
                                I would usually try to refocus with medidation or mindfulness and then think about the person I would be after the 
                                program. One of my favorite authors, Thich Nhat Hanh, has a book called No Mud, No Lotus: The Art of Transforming 
                                Suffering and I drew a lot of wisdom from that. Essentially, through mindfulness we can embrace difficulties, 
                                realize they are temporary, and come out the other s
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        Blog #5: First Week in Person! (9/23/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                        <div className="accordion-body">
                            <strong>What is the number one thing that held you back this week? Why?</strong>
                            <br></br> 
                                The thing that held me back the most this week was probably the bootstrap material. I understood the concept of 
                                having columns nested inside of rows which are then nested inside of a container; however, manipulating those 
                                elements is difficult for me. As a result, anything requiring bootstrap took me much longer to complete even the 
                                most basic change. I have been asking myself why this is the case and I believe there are a few reasons. First, it 
                                is a new tool that I have never used and second, I had difficulty navigating W3 Schools and Bootstrap webpages to 
                                find what I was attempting to do. I hope to revisit these concepts over the weekend and maybe even find new 
                                resources.
                            <br></br> 
                            <strong>What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, 
                                    or Atomic Design?
                            </strong>
                            <br></br> 
                                I would like to have a better understanding of when it is appropriate to define a method as a key: value pair within 
                                an object. I don't fully understand the reason for doing this yet. This is one of many things that I plan to research 
                                further when time allows.
                            <br></br> 
                            <strong>How does In-Person Bootcamp compare to Remote Onboarding?</strong>
                            <br></br> 
                                I was concerned that the in-person leg of this journey would be difficult for many reasons. Though I was 
                                surprised how I felt at the end of the first in-person week. Working in-person took away some of the anxiety 
                                I feel about asking for help or admitting that I don't understand the material. Another major difference is the 
                                connections that I have developed that otherwise wouldn't have been possible working remotely. I feel like I am 
                                officially part of something and there is a real sense of community and friendship.
                            <strong>What is your “Why”?</strong>
                            <br></br> 
                                The reason why I do this is for myself and my family. Previously I had a stable job that paid well and had good 
                                benefits; however, I was not happy. Realizing that my struggles were impacting my family was a tough pill to 
                                swallow, but I eventually came to the conclusion that I could make a change. I look forward to seeing what I will 
                                accomplish in this bootcamp and the person that emerges on the other side.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                        Blog #6: All About Developement (9/30/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                        <div className="accordion-body">
                            <strong>What did you learn about that helped you understand the development process?
                            </strong>
                                This week I learned about the interactions between websites and Application Programming Interfaces (APIs). 
                                Chris Hoffman wrote an article on howtogeek titled "What is an API?", that explained in simple terms the usefulness 
                                of APIs. I had never considered the amount of work that developers would be responsible for if they could not rely 
                                on APIs.
                            <br></br> 
                                What does it mean to develop good code?
                            <br></br>
                                Developing good code means providing a well-thought-out solution that is both flexible and abstract in a way that 
                                allows it to be useful in the future. This is opposed to code that is rigid, difficult to maintain, and/or code 
                                that has limited potential. 
                            <strong>hat does it mean to be a good developer?</strong>
                            <br></br> 
                                Being a good developer means laying out a detailed plan for how you will accomplish the end user's needs while being 
                                mindful of project scope. It means writing good code that is legible and well-thought-out as mentioned in above. 
                                Another key to being a good developer is continuously honing your skills in order to stay relevant in a rapidly 
                                evolving industry.
                            <br></br> 
                            <strong>What is one thing that programmers hate doing?</strong>
                            <br></br> 
                                This is a difficult question to answer because I do not feel like I have earned the title of programmer. However, 
                                on multiple occasions I have witnessed creative and talented individuals being dialed back to providing a solution 
                                that barely meets the requirements due to budgetary concerns or timeline. I imagine that programmers hate being put 
                                in this type of situation and being forced to limit product quality.
                                I feel like this is something I can relate to right now because I want to provide solution "X" but only have time 
                                to provide solution "Y". Timeline is still a major concern but instead of a monetary budget I am restricted by my 
                                knowledge base and mental fortitude.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                        Blog #7: Technical Article - Pseudocode (10/07/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                        <div className="accordion-body">
                            <strong>What is pseudocode and how does it help with programming?
                            </strong>
                            <br></br> 
                                First, let's break down the word pseudocode.  Pseudo, is defined by Merriam-Webster as “being apparently rather than 
                                actually as stated” or in other words something that is not quite what it claims to be.  Using this logic we can 
                                deduce that pseudocode appears to be code but is not actually code.
                            <br></br> 
                                This may be confusing but an example could help clarify things a bit.  Let's say that Jim needs to know what time he 
                                needs to wake up in order to make it to his favorite breakfast joint before it closes at 12:00 pm and let's also 
                                assume that Jim also prefers to sleep as late as possible.  We can think through all of the activities that Jim would 
                                need to perform and the time required to complete each one.  The list below shows a few possible activities that Jim 
                                would need to perform, the sum of which is 53 minutes.  If we subtract that number from the 12:00 pm closing time 
                                then we know that Jim needs to wake up by 11:07 am at the latest in order to get those fluffy pancakes he enjoys so 
                                much.
                            <br></br> 
                                Brush teeth = 3 minutes
                                Take a shower = 20 minutes
                                Get dressed = 20 minutes
                                Drive to restaurant = 10 minutes
                            <br></br> 
                                The example above could be translated to pseudocode as follows:
                            <br></br> 
                                Breakfast joint close time equals 12:00 pm
                                Jim leave time equals breakfast joint close time minus the sum of time to brush teeth, take a shower, get dressed, 
                                and drive to the restaurant 
                            <br></br> 
                            <strong>So how does this help with programming?</strong>
                            <br></br> 
                                Pseudocoding is language-agnostic programming which means that it does not include anything that would tie it to 
                                a particular programming language.  This is important because the logic contained within the pseudocode can be 
                                applied to various programming languages.  The pseudocode example above could be dissected into variables, 
                                mathematical operators, and functions depending on the language and methods chosen by the coder.  Pseudocode can 
                                be thought of as a roadmap and without it you may just find yourself lost and asking for directions.
                            <br></br> 
                            <em>
                                <a href ="https://www.merriam-webster.com/dictionary/pseudo">"Pseudo"</a> Merriam-Webster.com Dictionary, Merriam-Webster. 
                                Accessed 16 Oct. 2022.
                            </em>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                        Blog #8: Frameworks and Libraries (10/14/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                        <div className="accordion-body">
                            <strong>Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?
                            </strong>
                            <br></br> 
                                In my opinion JavaScript libraries are not hard to use, but they require attention to new details.  For example, 
                                in React you need to install certain packages within a particular directory in order for them to operate.  I found 
                                myself adding packages to the wrong directory far too often.  But the upside to this is how easy it is to add UI 
                                elements once the files are in place and you have a goal in mind.
                            <br></br> 
                            <strong>What Frameworks or Libraries are you interested in learning more about?</strong>
                            <br></br> 
                                I am curious how jQuery compares to React.  I am curious about the longevity, ease of use, capabilities, and the 
                                differences between these libraries.
                            <br></br> 
                            <strong>Find one emerging JavaScript tool that you would like to learn more about or use in your final project.</strong>
                            <br></br> 
                                I am interested in learning more about testing frameworks like Mocha.  I have seen Mocha paired with Chai library 
                                to run tests but I am not well read on either at this point.  So far, testing for me has been largely running 
                                console.log to see if I am getting the output that I expect so I would like to learn more about proper testing.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                        Blog #9: The CLI (10/21/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
                        <div className="accordion-body">
                            <strong>What have you learned about CLIs? Do you think they are scary?
                            </strong>
                            <br></br> 
                                I have learned a lot about CLI capabilities and the importance of executing certain commands within particular
                                directories in order for the command to execute properly.  So far I do not find them scary and actualy enjoy
                                working in the CLI.
                            <br></br> 
                            <strong>If you were to build a CLI, what would it do?</strong>
                            <br></br> 
                                If I were to build a CLI it would likely be some sort of game.  I really like the idea of making an immersive
                                CLI based adventure game.  I have never been a text based gamer but I think it sounds likes a fun exercise.
                            <br></br> 
                            <strong>List some ideas that without a Framework, would take you a long time to code</strong>
                            <br></br> 
                                I am not well read on databases yet but I know from experience that building tables can be extremely tedious.  That
                                being said, I can image that without a Framework, building a database would be extremely tedious and monotonous.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                        Blog #10: Halfway There! (10/28/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
                        <div className="accordion-body">
                            <strong>
                                Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you 
                                think is going to be the next biggest thing to power through?
                            </strong>
                            <br></br> 
                                The biggest hurdle that I have faced has been learning when to ask for help.  I like to dig deep into the material
                                and to gain a firm understanding rather than "coybow coding" or just jumping in and getting my hands dirty.  I
                                think this can be a good thing but it can also be a bad thing if you spend too much time in the material.  I think
                                the next biggest challenge for me is catching up on backlog items while continuing to build my knowledge base.
                            <br></br> 
                            <strong>
                                Compared to earlier, what are three ideas you might want to do for your final project? Are they the same 
                                ideas as before, or have they changed now that you understand more about the technology and your limitations?
                            </strong>
                            <br></br> 
                                I still like the idea of doing a copycat of AllTrails but I feel like this could be a stretch considering the maps
                                and GPS components of that application.  I also really like the idea of something centered around coffee, like
                                an untapped for local coffee shops where people can leave reviews.  Otherwise, I think I am entertaining the idea
                                of a craigslist copycat.
                            <br></br> 
                            <strong>
                                What surprised you about your first week in Python and how was it different from your first week in 
                                JavaScript? 
                            </strong>
                            <br></br> 
                                I was surprised how much easier it was to learn python than javascript.  I know that is because I am less focused on
                                the functionality and more on the syntax this round.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingEleven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
                        Blog #11: Charming The Snake That Is Python (11/04/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEleven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEleven">
                        <div className="accordion-body">
                            <strong>What are some similarities and differences you can see with JS and Python?</strong>
                            <br></br> 
                                I find that the syntax for JS and Python are very similar and in both cases it is fairly easy to see when you are
                                entering a function or even a loop.  That being said, there are so many small differences like the 'Four in loop'
                                used in Python.  Python is also more particular about variable types, so if you define a variable as a string and
                                then expect to use it in an equation, it will not be very happy.  But JS on the other hand is a little more fluid.
                                I actually prefer Python and find it more intuitive and easier to read.
                            <br></br> 
                            <strong>
                                If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have 
                                benefited?
                            </strong>
                            <br></br> 
                                Assuming I needed to learn both JS and Python still, I think it would have hurt me to learn about Python first.  Even
                                though I perfer Python, I believe I would hae struggled going the opposite direction.  I think the order makes sense
                                when you think about building the front end first and then learning the back end like we have been doing.
                            <br></br> 
                            <strong>
                                Think of a project or tech based tool that you use often and think about what the database structure might look 
                                like for it. Do you feel like you have a better understanding of how it works now and could you see yourself 
                                enjoying building something like that in the future? 
                            </strong>
                            <br></br> 
                                I think of the Carfax app ad even RockAuto website and how their databases may look.  The tables and relationships
                                between them make a lot more sense now.  I can even imagine the user profiles more and how the data you enter is stored.
                                I can certainly see myself enjoying building databases in the future.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwelve">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwelve">
                        Blog #12: Frameworks and Libraries (11/11/22)
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwelve">
                        <div className="accordion-body">
                            <strong>What are you struggling with the most in the Tech Stack so far and why?</strong>
                            <br></br> 
                                I think the thing that I have struggles with the most by far is React.  At this point I understand the interaction
                                between components and the various imports but I need to brush up on props.  I have a basic understanding but would
                                like to become more familiar with their uses.
                            <br></br> 
                            <strong>What companies or people would you like to hear talk during a Bootcamp lunch and learn?</strong>
                            <br></br> 
                                I would like to hear from a company that does cybersecurity.  In my previous profession, cybersecurity
                                was paramount and I have always wanted to learn more.  It would be interesting to hear more about the work environment
                                and how someone could pursue a career in the industry.
                            <br></br> 
                            <strong>After having built your first full-stack application, what things in your repertoire are a sticking point for 
                                you? Were you able to reconnect your React Restaurant to your Backend Bistro code? If so, what was that like, and 
                                if not, what hurdles did you need to jump?
                            </strong>
                            <br></br> 
                                For this exercise the sticking point for me was getting the API to provide the data in a format that I could then
                                feed into my React restaurant seemlessly.  I was able to complete all steps until that point with no problems and
                                even retrieve a response in a readable format.  I was able to connect my React restaraunt to the backend bistro code
                                but I did need to get some help in order to do so.  The hurdles that I faced were trying to get too deep of an 
                                understanding of everything that Django was doing and how it accomplished it.  There are times when you need to put
                                trust in the process and I had a hard time trusting Django this week.
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
};

export default Blog;     