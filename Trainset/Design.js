import React from 'react';
import Lesson from '../../../templates/Lesson';
import Collapsable from '../../../components/Collapsable';
import Module from '../../../components/Module';
import Buckling from '../../../images/Design/Buckling.jpg';
import Efficiency from '../../../images/Design/Efficiency.jpg';
import Expansion from '../../../images/Design/Expansion.jpg';
import Fatigue from '../../../images/Design/Fatigue.jpg';
import Friction from '../../../images/Design/Friction.jpg';
import StrainCurve from '../../../images/Design/StrainCurve.jpg';
import Stresses from '../../../images/Design/Stresses.jpg';
// import styles from './Components.css'; 


function Components() {
    return (
        <div >

            <Lesson
                lessonTitle="Design"
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
                        title="Friction"
                            header="Friction"
                
                            paragraph={
                                <p>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={Friction} alt="friction" width="75%"/>
                                </div>
           
                        <br />
                        <br /> 
                        Any two objects in contact produces a force pushing against each other but unless the two surfaces are perfectly smooth, a second force known as frictional force arises. The frictional force, which acts in the opposite direction of motion changes once the system begins to move. The term <span style={{ fontWeight: 'bold' }}>static friction</span> describes the condition when two objects are currently not moving and the term <span style={{ fontWeight: 'bold' }}>dynamic or kinetic friction</span> after the objects begin to move. 
                        <br />
                        <br />    
                        Although both static and kinetic friction is caused by the roughness of their surfaces their physical natures are fundamentally different. It is static friction which allows humans to move throughout the world. As our feet make contact with the earth, the frictional force between the soles of our shoes and the ground is greater than the force of slip known as the limiting friction. 
                        <br />
                        <br />
                        For every static frictional force system, there exists a force limit where if the force exceeds the limit, the two objects will break apart and start moving. The <span style={{ fontWeight: 'bold' }}>Coulomb Theories of Friction</span> gives an approximation for each of the three cases of friction. 
                        <br />
                        <br />
                        Case 1) Static Friction: The bodies stay at rest because the force H attempting to move the two objects against each other is lower than the limiting friction amount.  u_o is the coefficient of static friction and N is the normal (reaction) force between the two objects. 
                        <br />
                        <br />
                        Case 2) <span style={{ fontWeight: 'bold' }}>Limiting Friction:</span> The objects are at rest but are on the verge of moving. Once the force H reaches a large enough magnitude, the two bodies will be set in motion. Note that this equation gives you the force limit between two static objects irrespective of their size or the areas between the two objects. The term H_0 is the limit force of a system.
                        <br />
                        <br />
                        Case 3) Kinetic Friction: Once the objects cross that limiting friction threshold, the kinetic friction force R begins to act as an active force and the static friction coefficient changes to the dynamic friction coefficient which is always substantially smaller.
                        <br />
                        <br />
                        What's conceptually important to note is that if gravity is the force pushing the two objects against each other then the greater the mass of an object, the greater the limiting friction will be, since the force of gravity is equal to an object's mass multiplied by the gravitational constant.
                        </p>}
                    />
                    <Collapsable
                        title="Efficiency"
                        header="Efficiency"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Efficiency} alt="Efficiency" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Efficiency</span> is the measure of how well a system performs and what percentage of its power is properly transferred. An ideal system with 100% efficiency is technically impossible because in all cases, some energy will be lost to friction and heat. However, well designed mechanical systems can show efficiencies within the high 90%. 
                            <br />
                            <br /> 
                            In the case of motors, reading the motor sheets and finding the motor efficiency will give you the ratio between the electrical power supplied to the motor and the mechanical power the motor is able to put out.
                            <br />
                            <br /> 
                            In the case of mechanical assemblies, designing an efficient system is extremely important. Inefficient systems which operate for long periods of time will continuously lose power in the form of heat which will in turn result in ever increasing temperatures. Since most assemblies have a predetermined range of operating temperatures, inefficient systems will eventually cross those limits and cause damage and even failure.
       
                            </p>
                            }
                        />
                    <Collapsable
                        title="Thermal Expansion"
                        header="Thermal Expansion"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Expansion} alt="Expansion" width="75%"/>
                                </div>
                                <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Thermal expansion</span> is the natural inclination for an object to change shape, area and volume in response to a temperature change. When energy in the form of heat is absorbed into an object, molecules begin to vibrate and become excited. This excitement causes them to increase the distance between neighboring molecules which on a large scale leads to materials expanding. The same is true for the opposite, when an object loses heat energy, the internal molecules begin to slow and condense. 
                            <br />
                            <br /> 
                            Every material has a <span style={{ fontWeight: 'bold' }}>coefficient of thermal expansion</span> which is a numerical constant found through experiment which shows how much a material will grow or shrink based on the temperature. Given any type of system, it is crucial to determine how these changes in shape and volume might affect the components and their ability to function. 
                            <br />
                            <br /> 
                            Not only does the material of a component change its expansion characteristics but its shape as well. Depending on the shape of an object, it will expand and contract differently. When using systems made of various materials it is likely that given a surge of heat, some materials will try to expand much more than others around it. This can cause some materials to emit forces against their neighbors and potentially offset their position. Thermal expansion is one of the main reasons why designing an efficient system is so important. 
                            <br />
                            <br /> 
                            The equation for <span style={{ fontWeight: 'bold' }}>linear expansion</span> and the example above is helpful for visualizing this concept. The variables L and delta L represent the initial length and the change in length of the object. ɑ_L is the variable for our coefficient of thermal expansion and delta T is our change in temperature.  
                            </p>
                            }
                        />
                    <Collapsable
                        title="Stress"
                        header="Stress"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Stresses} alt="Stress" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            When designing anything, you will need to know what is going inside of the object. Engineering <span style={{ fontWeight: 'bold' }}>stress</span> is a physical quantity that identifies the internal force which a particle has on neighboring particles within an object. Luckily for us, there are only seven major types of stress, five of which are known as static loading stresses, meaning they are the resultant of a slow or constant force. The other two, impact stress and fatigue stress have their own sections.
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Compression</span> stress squeezes an object evenly in both directions while <span style={{ fontWeight: 'bold' }}>tension</span> is the process of being pulled apart in opposite directions. The instance of <span style={{ fontWeight: 'bold' }}>shear stress</span> is how scissors or gardening shears cut materials. It compresses the material, but in slightly offset directions, resulting in it separating at the center of the cut. <span style={{ fontWeight: 'bold' }}>Bending stress</span> wants to form a U-shape with the material while <span style={{ fontWeight: 'bold' }}>torsion</span> twists a material in opposite directions. 
                            </p>
                            }
                        />
                        <Collapsable
                        title="Strain"
                        header="Strain"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={StrainCurve} alt="Strain" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Strain</span> is the measure of deformation that an object undergoes from forces acting on it, specifically stress. It follows a very simple equation known as the Stress-Strain Equation.
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Modulus of Elasticity</span> is the measure of an object's willingness to deform elastically. Elastically, meaning that once the stress is removed, the material returns to its original shape and dimensions. The term stiffness refers to this measurement. The higher a material’s modulus of elasticity, the stiffer the object and thus harder to deform. On the opposite end, the lower an object's modulus of elasticity, the more flexible it is.
                            <br />
                            <br /> 
                            When engineers began to document the strengths of materials, they quickly discovered that internal stress is very difficult to measure. Strain however, which can then give you stress using the stress-strain equation is much easier to measure. Every material now has curves which shows you how a material will react when undergoing a certain amount of stress. 
                            <br />
                            <br /> 
                            These curves are extremely helpful at understanding if your material will undergo a process known as plastic deformation. <span style={{ fontWeight: 'bold' }}>Plastic deformation</span> is when a material deforms permanently as a result of some type of stress. The yield limit of a material is the point on a stress-strain curve where if the stress goes any higher, the material will not return to its original shape after the force has been removed.  
                            <br />
                            <br /> 
                            For these reasons, it should be clear that when designing a system, the need to keep the stresses below the material’s yield limit cannot be overstated. 
                            </p>
                            }
                        />
                        <Collapsable
                        title="Impact and Fatigue"
                        header="Impact and Fatigue"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Fatigue} alt="Fatigue" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            The other sections have so far dealt with static loading, <span style={{ fontWeight: 'bold' }}>impact</span> also called shock, is a case of dynamic loading, which means it happens very rapidly. Hitting a nail with a hammer, cars colliding, or stubbing your toe are all examples of impact loading. Different materials can behave in different ways given the case of impact. Very ductile materials may bend or absorb the energy while more brittle materials might instantaneously shatter or small pieces may flake. Proper assemblies should consider the effects of a sudden impact and look to mitigate potential damage if necessary.
                            <br />
                            <br />
                            With all forms of object stresses, materials often undergo a range of forces and with each fluctuation, microscopic changes can and will propagate inside of the material. If you think of bending a paperclip over and over, eventually it breaks. That’s <span style={{ fontWeight: 'bold' }}>fatigue</span> in action. As the word fatigue suggests, you can think about this phenomenon as if the material is getting tired and after too many cycles, it fails. 
                            <br />
                            <br />
                            Every object and material has something known as a <span style={{ fontWeight: 'bold' }}>fatigue curve</span> and as long as you design your system such that the stresses stay underneath the curve, then the material will be able to undergo an infinite amount of cycles. If your stresses climb above the curve, inevitably it will reach its limit and break in accordance to the microscopic fracturing which formed.  	
                            </p>
                            }
                        />
                        <Collapsable
                        title="Buckling"
                        header="Buckling"
                        paragraph={
                            <p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={Buckling} alt="Buckling" width="75%"/>
                            </div>
                            <br />
                            <br /> 
                            <span style={{ fontWeight: 'bold' }}>Buckling</span> is a term used to describe the very specific instance where a system collapses onto itself on one of its sides. This often occurs when a system has very thin structural components and a force of a high enough magnitude is added. This rarely happens if designers know the concept and how to avoid it. When selecting structural materials, always consider whether the loads are being applied on thin structural components and if so, consider thickening the walls or adding additional supports. 
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