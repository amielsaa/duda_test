import ReviewList from "../components/ReviewList"
import AddReviewBox from "../components/AddEditReviewBox"
import "../css/HomePage.css"

function HomePage() {

    return (
        <div className="homepage-container">
            <h1>Reviews</h1>
            <ReviewList />
            <AddReviewBox />
        </div>
    )
  }
  
  export default HomePage
  