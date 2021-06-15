import React from 'react';
import Lesson from '../../../templates/Lesson';
import Collapsable from '../../../components/Collapsable';
import Module from '../../../components/Module';
import Springs from '../../../images/MEComponents/Springs.jpg';
import SpringTable from '../../../images/MEComponents/SpringTable.jpg';
import Equivalent from '../../../images/MEComponents/Equivalent.jpg';
import Gears from '../../../images/MEComponents/Gears.jpg';
import Bearings from '../../../images/MEComponents/Bearings.jpg';
import Fasteners from '../../../images/MEComponents/Fasteners.jpg';
import Bolts from '../../../images/MEComponents/Bolts.jpg';
import Washers from '../../../images/MEComponents/Washers.jpg';
import VSA from '../../../images/MEComponents/VSA.jpg';
import Motors from '../../../images/MEComponents/Motors.jpg';
import Shafts from '../../../images/MEComponents/Shafts.jpg';
import Materials from '../../../images/MEComponents/Materials.jpg';
// import styles from './Components.css'; 


function Components() {
    return (
        <div >

            <Lesson
                lessonTitle="Components"
                title1="first title"
                title2="second title"
                links={<div>
                    <Module
                        title="Springs"
                        link="/"
                    />
                    <Module
                        title="tile2"
                    />
                    </div>}
                content={
                    <div>
                    <Collapsable
                        title="Springs"
                            header="Springs"
                
                            paragraph={
                                <p>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={Springs} alt="springs" width="75%"/>
                                </div>
           
                        <br />
                        <br /> 
                        The invention of coil springs in 1857 revolutionized mechanical engineering with their unique ability to absorb, store and then later release energy. Spring types include <span style={{ fontWeight: 'bold' }}>tension springs, compression springs, torsional springs</span> and <span style={{ fontWeight: 'bold' }}>spiral springs</span>. Tension and compression springs absorb energy linearly while torsional and spiral springs absorb rotational energy. If you have ever used a retractable dog leash, a seatbelt or most retractable mechanisms then you have witnessed the incredible power of the spiral spring in action.
                        <br />
                        <br />    
                        Most importantly when talking about springs is to first establish that the traditional metal coil spring is not your only option if you want to store and release energy. Blocks of rubber, compressed air springs or hydraulic springs can all be used for the same purposes. To some extent, every material in the universe has the ability to store and release energy, although for most materials the amount is extremely low. 
                        <br />
                        <br />
                        Often when designing a system it is advantageous to design components out of more elastic materials instead of designing a rigid system which diverts energy into a physical spring. 
                        <br />
                        <br />
                        The most standard spring equation uses three variables, F for force, x for displacement and k for the <span style={{ fontWeight: 'bold' }}>spring constant</span>, which is the measure of how stiff the spring will be. The standard equation and units are defined in the table below. Note that the negative symbol in front of the spring constant is there because a compressive force is considered negative.
                        <br />
                        <br />
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={SpringTable} alt="springs" width="75%"/>
                                    </div>
                    
                        <br />
                                    The second most important concept when using springs is their arrangement, which directly affects the total spring constant. Springs can be arranged as a single spring, as a <span style={{ fontWeight: 'bold' }}>series</span>, or as a <span style={{ fontWeight: 'bold' }}>parallel</span> system.
                                    <br />
                        <br />
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={Equivalent} alt="springs" width="75%"/>
                                    </div>
                   
                        <br />
                                    Aligning a system of parallel springs will result in a much stiffer equivalent spring than by aligning your springs one after another as a series. If you can determine the amount of force which will act on your system, then you can utilize the above equation to choose the spring with the right spring constant to ensure your application will compress or stretch to meet your needs.
                                    
                        </p>}
                    />
                    <Collapsable
                        title="Gears and Gearboxes"
                        header="Gears and Gearboxes"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Gears} alt="Types of Common Gears" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            One of the most fundamental components of mechanical engineering is none other than the gear. Gears are extraordinary for transferring power from one place to another without losing too much of your energy to excess friction.
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Spur gears</span> are some of the most common gears you will find on the market and can be made from a wide variety of materials. Even 3d printed plastic spur gears work well for lower force applications. 
                            <br />
                            <br /> 
                            As with all gears, misalignment is a very common point of failure. The force exchange works by the teeth of the gears pushing and sliding against each other and by having the teeth too close or too far from each other, you run the risk of grinding, unnecessary friction loss and even breaking.
                            <br />
                            <br /> 
                            A <span style={{ fontWeight: 'bold' }}>gearbox</span> is a power transmission component used primarily to provide speed and torque conversions between rotating power sources. Internally, gearboxes often use combinations of gears to achieve their speed-torque conversion. <span style={{ fontWeight: 'bold' }}>Planetary</span> gearboxes are often more expensive due to their complexity but can have enormous conversion factors such as 50:1 or even 100:1. This means they divide the speed of rotation by 50 but multiply the torsional power by 50! An additional benefit of planetary gears is their extremely high efficiency which in turn leads to minimal wasted energy.
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Gear Ratchets</span> are a useful way of preventing gear rotation in a certain direction. When possible, you can design your assembly so that gravity pushes down on the ratchet while dynamic systems will require a spring.
                            <br />
                            <br />
                            <span style={{ fontWeight: 'bold' }}>Rack and pinion</span> gears have the unique ability to convert rotational movement into linear movement while <span style={{ fontWeight: 'bold' }}>bevel gears</span> can change the angle of rotation of an assembly.
                            <br />
                            <br />
                            <span style={{ fontWeight: 'bold' }}>Worm gears</span> have a very special property where the worm(spiral) gear can rotate the cylindrical gear but the cylinder gear can’t turn the worm gear. This is excellent when you don't want reactive forces stressing against your motor but you want your motor to be able to turn an assembly.
                            </p>
                            }
                        />
                    <Collapsable
                        title="Bearings and Mounts"
                        header="Bearings and Mounts"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Bearings} alt="springs" width="75%"/>
                                </div>
                                <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Bearings</span> are a category of mechanical components which often are used for rotating and shaft applications. Most bearings consist of an outer compartment which houses a rotating inner section that attaches to a rod or cylindrical member. 
                            <br />
                            <br /> 
                            For our rotating bearings, the internal mechanisms which attempt to provide a frictionless rotation internally utilize small metal balls, cylindrical rollers or cone shaped rollers. Ball bearings are often used for lower load applications while the hardier cylindrical bearings will be more expensive but capable of supporting higher load requirements.
                            <br />
                            <br /> 
                            On the lip of most bearings will be two grub screws which when tightened, pin the inserted rods, allowing the transfer of power. Although the frictional force between the rod and the two screws is minimal, because the bearings’ rotary mechanism is nearly frictionless, the rods will rarely slip. Higher load applications can also have stronger ways of pinning the rods to the inside chamber. 
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Mounts</span> on the other hand, do not have a rotating internal assembly and primarily serve to hold a beam in place. As is the case with the clamping mount, the tightening proceedure actually forces the entire mount closer to itself to tighten its hold against the inserted rod. 
                            <br />
                            <br /> 
                            Many bearings such as the rotary bearings which come with or without the flat back plate will not have any mechanism to grip onto an inserted rod. These are used for very low turning force applications where the frictional force between the bearings’s inside chamber and the outside of the rod is sufficient to ensure a smooth rotation.
                            </p>
                            }
                        />
                    <Collapsable
                        title="Fasteners"
                        header="Fasteners"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Fasteners} alt="Types of Common Fasteners" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            When designing an assembly, one of the earliest decisions a person will have to make is whether you want to use permanent or impermanent joining methods. Screws, pins, washers, nuts and bolts can easily be undone while adhesives, welding, brazing, soldering and rivets are meant to hold your system together forever. If you are prototyping on a budget, impermanent assemblies are most likely your best bet.
                            <br />
                            <br /> 
                            When browsing a catalogue for such things like screws and bolts it is easy to become overwhelmed with the vastness of the choices available. The most important characterization of these fasteners is what tool is used to tighten them and what application they are being used for. Some people prefer to use hex keys for turning while others prefer a screwdriver. What you need to consider is that repeated use of a fastener often causes damage and “strips” the material which allows turning. In a worse case scenario, a stripped screw can become stuck in an object with no way to remove it.
                            <br />
                            <br /> 
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Bolts} alt="Types of Common Screws and Bolts" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            If you know that you will be putting the fastener under repeated or high stress, then consider using something like a hex head screw whose entire exterior is what is grabbed on to. <span style={{ fontWeight: 'bold' }}>Socket head screws</span> are also commonly reliable. Mainly, it is important to observe how much material will be put under pressure and then choose the right fastener for the job.
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Set screws</span> (also sometimes called grub screws) are an extremely useful type of screw which borrows into a material and allows you to secure an object against another object. 
                            <br />
                            <br /> 
                            Unless the material is high grade steel, we highly advise against using <span style={{ fontWeight: 'bold' }}>flat head screws</span> as they are one of the most common screws to strip and their flatness does not allow many ways to remove the screw if that happens.
                            <br />
                            <br /> 
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={Washers} alt="Types of Common Washers" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                                A <span style={{ fontWeight: 'bold' }}>washer</span> is a thin, often disk-shaped plate with a central hole used to evenly distribute force between a fastener and a material’s contact area. <span style={{ fontWeight: 'bold' }}>Sealing washers</span> can be used in applications that involve fluids to form a seal between the fastener and the contact area, preventing fluids from leaking around your fastener.
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Lock washers</span> on the other hand, have a natural locking feature to resist loosening from vibrations. When using motors or dynamic systems, always consider that most screws and bolts will loosen over time and by placing a lock washer between a standard washer and your fastener, your assembly will remain tight indefinitely.
                            <br />
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={VSA} alt="Vibration Safe Assortment" width="50%"/>
                            </div>
                            </p>
                            }
                        />
                        <Collapsable
                        title="Motors and Actuators"
                        header="Motors and Actuators"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Motors} alt="Motors" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            Electro-mechanical motors are the one of the most common methods of actuating a system and traditionally work by converting electrical energy into mechanical energy. <span style={{ fontWeight: 'bold' }}>DC motors</span>, which utilize direct current achieve this energy conversion by coiling wires in a certain configuration which then generate an electro-magnetic field when a current passes through. The rotor, which is the part of the motor which rotates, often has a system of field magnets which spin in accordance to the direction of the flowing power.
                            <br />
                            <br /> 
                            If you aren't familiar with the term <span style={{ fontWeight: 'bold' }}>actuator</span>, know that it is a general term which means an object that allows something to work. A motor is an actuator.
                            <br />
                            <br /> 
                            The five most common types of DC motor applications are the brushed DC motor, the brushless DC motor, the stepper motor, the servo motor and the linear actuator. 
                            <br />
                            <br /> 
                            The standard <span style={{ fontWeight: 'bold' }}>DC brushed motor</span> can often be used by simply running a current at the appropriate voltage through the motor’s voltage and ground wires. Most of these motors are bi-directional, meaning reversing the direction of the current will cause the motor to rotate in the opposite direction. Most of the differences between these motors and brushless motors have to do with the internal wire coil configurations. Brushed motors are cheaper and a motor controller is not needed for most applications. RC cars use brushed DC motors to power their wheels. They are great for making things spin at a fixed rotational speed. 
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Brushless motors</span> are far more complicated, more expensive but have excellent efficiency, power output and make less noise. Drones often use brushless DC motors to spin their propellers due to these excellent characteristics and reduced size.
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Stepper motors</span> are a form of brushless DC motor that have extremely high precision and can “step” in increments less than a degree. Small, hobby stepper motors are excellent for building machines that need high accuracy but are often slow compared to other traditional motors. These motors are often bipolar, which means the current has to alternate direction which requires a motor control board for control.
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Servo motors</span> are built using a DC motor and an arrangement of internal gears and can be very easily controlled using a servo control board. Although they are easy to use and have reasonable accuracy, their downside is that these motors will often only be able to rotate 180 degrees or less. These work great for robotic starter projects because most servo control boards can control a dozen or more servos at a time.
                            <br />
                            <br /> 
                            The <span style={{ fontWeight: 'bold' }}>linear actuator</span> is a component which uses an internal DC motor to make a cylinder move in and out of a chamber in a straight line. The term stroke refers to how long is the distance between the cylinder when it is fully retracted to when it is fully extended. In most cases, because they use an internal DC motor, they can be controlled using a standard DC motor controller. Linear actuators are often very strong and can push and pull objects very well making them excellent for walking robots.
                            </p>
                            }
                        />
                        <Collapsable
                        title="Shafts, Keys and Accessories"
                        header="Shafts, Keys and Accessories"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Shafts} alt="Shafts, Keys and Accessories" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Keys</span> are a small piece of metal used to connect a shaft to a rotating machine element. The <span style={{ fontWeight: 'bold' }}>keyway</span> is a necessary groove cut into the shaft that allows the key to sit nicely within. When the shaft turns, the key turns with it and transfers the power accordingly. These are often used to transfer power between a motor shaft and a gear.
                            <br />
                            <br />
                            Often it is the case that you need a machine component to sit a certain distance away from another object. <span style={{ fontWeight: 'bold' }}>Spacers</span>, which are essentially tubes, can slide onto a shaft and provide that necessary distance. 
                            <br />
                            <br />
                            Sometimes it is easier to use a retaining ring or <span style={{ fontWeight: 'bold' }}>shaft collar</span> which does the same thing but grips onto the shaft for support. Unlike shaft collars, <span style={{ fontWeight: 'bold' }}>retaining rings</span> require a groove cut into the shaft to keep it from sliding around. It is important to note that shaft collars often grip using a small grub screw and are not capable of withstanding high axial forces while a spacer will resist movement to the extent of the material’s properties. 
                            <br />
                            <br />
                            If you want to have a mechanism slide up and down a shaft, then a <span style={{ fontWeight: 'bold' }}>shaft slider</span> is perfect for you. Internally, dozens of metal beads roll against the beam and provide a smooth and nearly frictionless linear motion.	
                            </p>
                            }
                        />
                        <Collapsable
                        title="Stock Material"
                        header="Stock Material"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Materials} alt="Common Stock Materials" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            If you plan on using metals, and you should, then you will quickly discover the variety of shapes and sizes that these materials can come in. From the thinnest sheet of titanium to a rectangular aluminum extrusion to a round tube of high-grade steel, knowing what shapes material comes in proves an invaluable advantage. When designing any system for manufacturing, the least machining needed the better.
                            <br />
                            <br /> 
                            The most common metals you’ll find readily available are steel, aluminum, brass and titanium.You’ll also find copper, bronze, tungsten, nickel and platinum though the shapes available might be very limited. Aluminum is reasonably strong, light, easy to use and doesn't rust since it contains no iron. Steel on the hand comes in dozens of alloys and is excellent for most robust applications, but it is extremely heavy.
                            <br />
                            <br /> 
                            2020 <span style={{ fontWeight: 'bold' }}>extrusion</span>, named for being 20mm x 20mm, allows sliding fasteners into its grooves and be used for a wide variety of structural applications. The inside cylindrical tube can also be tapped to allow bolts to directly screw into it. 
                            </p>
                            }
                        />
                    </div>
                }
            />

        </div>
    );
};

export default Components; 