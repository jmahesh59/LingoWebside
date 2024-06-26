import { getLesson, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation";


async function LessonPage() {

    const lessonData = getLesson();
    const userProgressData = getUserProgress();

  const [
    lesson,
    userProgress
  ] = await Promise.all([
        lessonData,
        userProgressData
  ])
 
  if(!lesson || !userProgress){
    redirect("/learn")
  }
 
  const initialPercentage = lesson.challenges.filter((challege)=>challege.completed).length/lesson.challenges.length *100 
 
  return (
    <Ouiz
     initialLessonId ={ lesson.id }
     initialLessonChallenges={ lesson.challenges }
     initialHearts = { userProgress.hearts }
     initialPercentage = { initialPercentage }
     userSubscription = { undefined }
    />
  )
}

export default LessonPage
