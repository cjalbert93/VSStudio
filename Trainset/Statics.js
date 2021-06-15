import React from 'react';
import Lesson from '../../../templates/Lesson';
import Collapsable from '../../../components/Collapsable';
import Module from '../../../components/Module';
import Beams from '../../../images/Statics/Beams.jpg';
import Centroids from '../../../images/Statics/Centroids.jpg';
import Couples from '../../../images/Statics/Couples.jpg';
import ForceAnalysis from '../../../images/Statics/ForceAnalysis.jpg';
import ForceDecomp from '../../../images/Statics/ForceDecomp.jpg';
import FreeBodyDiagram from '../../../images/Statics/FreeBodyDiagram.jpg';
import Moment from '../../../images/Statics/Moment.jpg';
import MomentReduc from '../../../images/Statics/MomentReduc.jpg';
import Parallel from '../../../images/Statics/Parallel.jpg';
import POT from '../../../images/Statics/POT.jpg';
import Torque from '../../../images/Statics/Torque.jpg';
// import styles from './Components.css'; 


function Components() {
    return (
        <div >

            <Lesson
                lessonTitle="Statics"
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
                        title="Free Body Diagrams"
                            header="Free Body Diagrams"
                
                            paragraph={
                                <p>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={FreeBodyDiagram} alt="Free Body Diagrams" width="75%"/>
                                </div>
           
                        <br />
                        <br /> 
                        Perhaps the most widely used analysis method within mechanical engineering is the <span style={{ fontWeight: 'bold' }}>free body diagram</span>. The FBD serves as a graphical representation to visualize every force acting on a specific object. These forces include gravity, linear forces, moments, torques, normal forces, friction and anything else that’s relevant. 
                        <br />
                        <br />    
                        When constructing a free body diagram, it is crucial to remember that this is meant as a tool to identify forces and not as a method for doing stress or force calculations. Calculating actual forces is widely done using force simulation software but to use these programs you have to know what forces are acting on your object. 
                        <br />
                        <br />
                        The following is a guideline for constructing free body diagrams, 
                        <br />
                        <br />
                        1. Draw the simplest shape possible that represents the overall structure of an individual component within your system.
                        <br />
                        2. Draw straight lines for linear forces and curved lines around dots for moments and torques.
                        <br />
                        3. Draw a reference coordinate system so you can relate the forces to an independent x,y,z axis.
                        <br />
                        4. If your component is moving, draw the direction using a dashed arrow.
                        <br />
                        <br />
                        Note that when drawing force vectors, it is helpful to include the direction of application, the point of application, the magnitude and the reaction. Every object on our planet is subject to gravity, so be sure to include a downwards gravitational force acting on the center mass of your object. Unless the object is in free-fall, you should also add the reaction force (called the normal force) at the location where the object is pushing back. The gravitational acceleration at the surface of the earth is roughly 9.81 meters/ second^2 (metric) or 32.17 feet/second^2 and if you multiply either by the mass of the object, you will get the gravitational force, since F=ma.
                        </p>}
                    />
                    <Collapsable
                        title="Force Flow and Critical Sections Analysis"
                        header="Force Flow and Critical Sections Analysis"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={ForceAnalysis} alt="Force Analysis" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            An extremely powerful design tool is learning how to draw approximate force lines through a system and seeing how the force transfers as it moves through the different parts of your system. This analysis is slightly different from the free body diagram as it takes into account the entire system and not just individual components. 
                            <br />
                            <br /> 
                            With this analysis, it is helpful to draw a simplified version of your system and trace the lines of forces as it moves between components. Every time the force transfers to another component, note the way it transfers and what surfaces/materials will be subject to the internal forces.  
                            <br />
                            <br /> 
                            Having a list of force transfers will allow you to determine which transfer sections might be subject to material failure, these are your <span style={{ fontWeight: 'bold' }}>critical sections</span>. Any section deemed critical should be analysed further and possibly reinforced by selecting a stronger material or by redesigning it with thicker characteristics.
                            </p>
                            }
                        />
                    <Collapsable
                        title="Centroids"
                        header="Centroids"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Centroids} alt="Centroids" width="75%"/>
                                </div>
                                <br />
                            <br /> 
                            Unless using a 3D modeling software which does the heavy lifting for you, it is extremely helpful to treat objects as if the entirety of their mass is condensed on their centers of gravity. The <span style={{ fontWeight: 'bold' }}>centroid</span> can be understood as the point where an entire object could be balanced on the tip of a pin. 
                            <br />
                            <br /> 
                            It is often the case when dealing with complex shapes that the center of mass isn’t physically on the object but somewhere near it. This occurrence is perfectly acceptable for the purpose of calculations. Knowing the location of the center of rotation can be extremely helpful at understanding how force vectors may rotate your object. The centroid of an object is not only its center of mass and center of rotation but its center of gravity. All these characteristics can be reduced to a single point in space and allows difficult assortments of shapes to be taken as a whole.
                            </p>
                            }
                        />
                    <Collapsable
                        title="Torque"
                        header="Torque"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Torque} alt="Torque" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Torque</span> is caused by applying a force along a line of action which causes a rotational force. The fundamental concept to consider with torsion is that torque is equal to force multiplied by the length of what is known as the <span style={{ fontWeight: 'bold' }}>moment arm</span>. 
                            <br />
                            <br /> 
                            You can experience this concept if you have ever used a wrench. The longer the wrench or the further back you apply the force, the greater the torque. If you ever find yourself trying to turn a really tight nut, remember that you can either just push harder at the end of your wrench or get a longer wrench.
                            </p>
                            }
                        />
                        <Collapsable
                        title="Force Decomposition"
                        header="Force Decomposition"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={ForceDecomp} alt="Force Decomposition" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            Force is a vector quantity which is defined by its magnitude, direction and point of application. When dealing with any three-dimensional force, it is often helpful to reduce the force to its’ x, y and z components. Physically, these three component forces have an equal result to the initial 3D force but having the forces individually within one dimension can make them much more manageable. 
                            <br />
                            <br /> 
                            Often engineers will mention a six degree of freedom system and by that they mean three linear directions (x,y,z) and then three rotational directions. The <span style={{ fontWeight: 'bold' }}>right hand rule</span> is used throughout the world and is an agreed upon rule which engineers use to decide which direction is positive and which is negative when it comes to rotation. If you point your thumb in the direction of any of the positive linear axes and rotate your hand in the clockwise direction, then that rotational direction is considered positive.
                            </p>
                            }
                        />
                        <Collapsable
                        title="Forces on Rigid Bodies"
                        header="Forces on Rigid Bodies"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={POT} alt="principle of transmissibility" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            The term <span style={{ fontWeight: 'bold' }}>rigid body</span> is used in engineering and physics to describe any object which when applied forces, does not deform from their original shape. Rigid bodies are the precondition for many of the following laws of physics. The <span style={{ fontWeight: 'bold' }}>principle of transmissibility</span> states that a single force can be applied anywhere on an object along its <span style={{ fontWeight: 'bold' }}>line of action</span> without changing the effect of the force.
                            <br />
                            <br />
                            The <span style={{ fontWeight: 'bold' }}>parallel law of forces</span> states that a body subject to two or more forces whose lines intersect at any point can have their forces replaced by an equivalent force resultant force R. Since rigid bodies can have their forces moved along their lines of actions, as long as the lines of forces intersect between multiple forces, you can lump all of them together and reduce it to one resultant force. This is massive when determining how an object will react when subject to a large number of forces. 
                            <br />
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Parallel} alt="parallel law of forces" width="75%"/>
                            </div>
                            <br />
                            <br />
                            Forces also have the unique property that any force acting on a body can be translated to another location so long as the appropriate rotational force is also added. When combining this rule with the parallel law of forces and the principle of transmissibility it means that all forces acting on a body can be moved to one location and then reduced to a single equivalent force and moment. This combination of rules allows an endless amount of systems to be controlled by adding the appropriate force vectors in the right locations. When dealing with multiple forces, traditionally engineers will determine the resultant using the center of mass (centroid) as the origin. 
                            <br />
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={MomentReduc} alt="moment reduction" width="75%"/>
                            </div>	
                            </p>
                            }
                        />
                        <Collapsable
                        title="Moments and Couples"
                        header="Moments and Couples"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Moment} alt="Moment" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            The term <span style={{ fontWeight: 'bold' }}>moment</span>, if often used interchangeably with the term torque, they even have the same equation. Moment is often used when the object as a whole is not made to rotate despite the force being a rotational force. For example, placing a heavy box on a table will have just this effect, the gravity multiplied by mass of the box is our force, the distance between the box and table legs is our length and the resultant force is known as the moment. You should note that in this example, there would be a moment acting on each corner.
                            <br />
                            <br /> 
                            A <span style={{ fontWeight: 'bold' }}>couple</span>, consists of two forces of equal magnitude with parallel lines of action and opposite facing force directions. They cannot be reduced any further than what they are as forces but can easily be converted into a single rotation moment force. An important property of couples and moments is they can be applied anywhere on a rigid body and still have the same rotational effect.
                            <br />
                            <br /> 
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Couples} alt="couples" width="75%"/>
                            </div>
                            </p>
                            }
                        />
                        <Collapsable
                        title="Supports, Trusses and Beams"
                        header="Supports, Trusses and Beams"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Beams} alt="Supports, Trusses and Beams" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            It is common in the world of engineering to design structural supports which are rigid in all three lateral directions. However, it may occur that a support which can move in one or two lateral directions is preferable. These supports, known as single, double or three directional <span style={{ fontWeight: 'bold' }}>force transmitting supports</span> can be used to allow unique degrees of freedom. 
                            <br />
                            <br /> 
                            A truss or support is called <span style={{ fontWeight: 'bold' }}>kinematically determinate</span> if all the unknown forces going through the system can be solved using the equilibrium equation which entails the system to add up to zero if it is not moving. In essence, the number of degrees of freedom for a beam or truss at each point will determine if a system is over or under-constrained. 
                            <br />
                            <br /> 
                            This was important in the days before 3D force analysis, called <span style={{ fontWeight: 'bold' }}>finite element analysis (FEA)</span> because engineers would rely on the equilibrium equations to solve for the forces. Arches, trusses and beam systems would have to be designed in this way or the calculations would be unsolvable.
                            <br />
                            <br />
                            Nowadays, this condition is not a requirement and systems can be designed based on design characteristics that dont take into consideration an engineer's ability to solve calculations on paper, thankfully. However, systems being designed as kinematically determinate is still good practice as an over-constrained system might have unnecessary structural add-ons and an under constrained system will be able to move in ways that are not intended.
                            <br />
                            <br />
                            Another good engineering concept to understand are <span style={{ fontWeight: 'bold' }}>shear force and bending moment diagrams</span> on beams. When beams are attached on each side and force is transferred into the beam, it inevitably causes shear force to push downwards at a location while the support maintains equilibrium by pushing upwards in the opposite direction. The further that force has to travel across the beam, the larger the force of the moment. When multiple forces and moments act together onto a beam, it is useful to form these diagrams to determine which parts of your system are experiencing the highest loads thus making it the most vulnerable area.
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