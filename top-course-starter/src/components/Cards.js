import Card from "./Card";
import {useState} from 'react'; 

function Cards({courses}){
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach(courseCatorgory=>{
            courseCatorgory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map((course)=>(
                <Card key={course.id} 
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}
                />
            ))
            }
            
        </div>
        )

}

export default Cards;