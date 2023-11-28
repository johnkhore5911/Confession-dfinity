// // import Text "mo:base/Text";
// // import Error "mo:base/Error";
// // import HashMap "mo:base/HashMap";
// // import Iter "mo:base/Iter";
// // import List "mo:base/List" ;
// // import Int "mo:base/Int";
// // import Debug "mo:base/Debug";

// // actor {
// //   type Review = {
// //       review : Text ; 
// //       stars : Text ; 
// //       images :Text ; 
// //   } ; 

// //   stable var idCount = 0;
// //   stable var reviews : List.List<Review> = List.nil<Review>();

// //     public func addReview( reviewI : Text, starsI : Int, imagesI : Text) {
// //     idCount := idCount + 1;
// //     // let idstr = Text.fromInt(idCount);
// //     var reviewNew : Review ={

// //       // id1 = idI;
// //       id = Int.toText(idCount);
// //       review = reviewI;
// //       stars = Int.toText(starsI);
// //       images = imagesI;
// //     };
// //     reviews := List.push(reviewNew, reviews);
// //     // Debug.print(debug_show (reviews))
// //   };

// //   public query func getReview() : async [Review] {
// //        return List.toArray(reviews) ;
// //   }
// // };


// import Text "mo:base/Text";
// import Error "mo:base/Error";
// import HashMap "mo:base/HashMap";
// import Iter "mo:base/Iter";
// import List "mo:base/List";
// import Int "mo:base/Int";
// import Debug "mo:base/Debug";

// actor {
//   type Review = {
//     review: Text;
//     stars: Text;
//     images: Text;
//   };

//   stable var idCount = 0;
//   stable var reviews: List.List<Review> = List.nil<Review>();

//   public func addReview(reviewI: Text, starsI: Int, imagesI: Text) {
//     idCount := idCount + 1;
//     var reviewNew: Review = {
//       id = Int.toText(idCount);
//       review = reviewI;
//       stars = Int.toText(starsI);
//       images = imagesI;
//     };
//     reviews := List.push(reviewNew, reviews);
//     // Debug.print(debug_show (reviews))
//   };

//   public func addConfession(confessionText: Text) {
//     idCount := idCount + 1;
//     var confessionReview: Review = {
//       id = Int.toText(idCount);
//       review = confessionText;
//       stars = "0"; // Assuming confessions don't have a star rating
//       images = ""; // Assuming confessions don't have images
//     };
//     reviews := List.push(confessionReview, reviews);
//     // Debug.print(debug_show (reviews))
//   };

//   public query func getReview(): async [Review] {
//     return List.toArray(reviews);
//   }
// };


// // 
// import Text "mo:base/Text";
// import List "mo:base/List";
// import Int "mo:base/Int";

// actor {
//   type Review = {
//     id: Text;
//     review: Text;
//     likecount: Int;
//     dislikecount: Int;
//     img: Text;
//   };

//   stable var idCount = 0;
//   stable var reviews : List.List<Review> = List.nil<Review>();

//   public func addReview(reviewI: Text, likecountI: Int, dislikecountI: Int, imgI: Text) {
//     idCount := idCount + 1;
//     var reviewNew: Review = {
//       id = Int.toText(idCount);
//       review = reviewI;
//       likecount = likecountI;
//       dislikecount = dislikecountI;
//       img = imgI;
//     };
//     reviews := List.push(reviewNew, reviews);
//   };

//   public query func getReviews(): async [Review] {
//     return List.toArray(reviews);
//   }

//   public func addConfession(confessionText: Text) {
//     idCount := idCount + 1;
//     var confessionReview: Review = {
//       id = Int.toText(idCount);
//       review = confessionText;
//       likecount = 0;
//       dislikecount = 0;
//       img = ""; // You can add an image URL for the confession if needed
//     };
//     reviews := List.push(confessionReview, reviews);
//   };
// };

// import Text "mo:base/Text";
// import List "mo:base/List";
// import Int "mo:base/Int";

// actor {
//   type Review = {
//     id: Text;
//     review: Text;
//     likecount: Int;
//     dislikecount: Int;
//     img: Text;
//   };

//   stable var idCount = 0;
//   stable var reviews : List.List<Review> = List.nil<Review>();

//   public query func getReviews(): async [Review] {
//     return List.toArray(reviews);
//   }

//   public func addConfession(confessionText: Text, img: Text) {
//     idCount := idCount + 1;
//     var confessionReview: Review = {
//       id = Int.toText(idCount);
//       review = confessionText;
//       likecount = 0;
//       dislikecount = 0;
//       img = img;
//     };
//     reviews := List.push(confessionReview, reviews);
//   };
// };


import Text "mo:base/Text";
import List "mo:base/List";
import Int "mo:base/Int";

actor {
  type Review = {
    id: Text;
    review: Text;
    likecount: Int;
    dislikecount: Int;
  };

  stable var idCount = 0;
  stable var reviews : List.List<Review> = List.nil<Review>();

  public query func getReviews(): async [Review] {
    return List.toArray(reviews);
  };

  public func addConfession(confessionText: Text) {
    idCount := idCount + 1;
    var confessionReview: Review = {
      id = Int.toText(idCount);
      review = confessionText;
      likecount = 0;
      dislikecount = 0;
    };
    reviews := List.push(confessionReview, reviews);
  };
};
