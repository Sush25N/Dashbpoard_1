import React from "react";
import styled from "styled-components";

const FeedbackContainer = styled.div`
  background-color: #27293d;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #ffffff;
  margin-bottom: 20px;
`;

const FeedbackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 365px;
  overflow-y: auto;
`;

const FeedbackItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const FeedbackText = styled.div`
  color: #9e9e9e;
`;

const FeedbackHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const FeedbackName = styled.span`
  color: #ffffff;
  font-weight: bold;
  margin-right: 10px;
`;

const FeedbackStars = styled.div`
  color: #f6c23e;

  span {
    margin-right: 3px;
  }
`;

const FeedbackContent = styled.p`
  margin: 0;
  font-size: 0.9em;
`;

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      feedback:
        "The food was excellent and so was the service. I had a burger with greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
      rating: 5,
    },
    {
      name: "Dianne Russell",
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
      rating: 4,
    },
    {
      name: "Devon Lane",
      feedback:
        "Normally wings are wings, but theirs are lean meaty and tender, and they use a dry rub that is fantastic. I highly recommend the avocado.",
      rating: 2,
    },
    {
      name: "John",
      feedback:
        "Normally wings are wings, but theirs are lean meaty and tender. I highly recommend the avocado.",
      rating: 3,
    },
    {
      name: "Sush",
      feedback:
        "Normally wings are wings, and they use a dry rub that is fantastic. I highly recommend the avocado.",
      rating: 5,
    },
  ];

  return (
    <FeedbackContainer>
      <Title>Customer's Feedback</Title>
      <FeedbackList>
        {feedbacks.map((feedback, index) => (
          <FeedbackItem key={index}>
            <Avatar
              src={`https://i.pravatar.cc/150?img=${index + 1}`}
              alt="Avatar"
            />
            <FeedbackText>
              <FeedbackHeader>
                <FeedbackName>{feedback.name}</FeedbackName>
                <FeedbackStars>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i < feedback.rating ? "⭐" : "☆"}</span>
                  ))}
                </FeedbackStars>
              </FeedbackHeader>
              <FeedbackContent>{feedback.feedback}</FeedbackContent>
            </FeedbackText>
          </FeedbackItem>
        ))}
      </FeedbackList>
    </FeedbackContainer>
  );
};

export default CustomerFeedback;
