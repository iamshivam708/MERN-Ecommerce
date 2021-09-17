import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <div className="faq">
          <div className="container-fluid">
        <div class="px-4 py-5 my-3 text-center">
            <i class="fas fa-question-circle fa-5x"></i>
            <h1 class="display-5 fw-bold">FAQs</h1>
        </div>
        </div>
          <div className="container mt-4">
        <h1>FAQ - Order, Shipping, Etc.</h1> 
        <h3 className="mt-3">Q: How long does it take to ship my order?</h3>
        <p>A: Orders are usually shipped within 1-2 business days after placing the
        order.</p>
        <h3>Q: When will my order arrive?</h3>
        <p>A: Shipping time is set by our delivery partners, according to the delivery method chosen by you.
        Additional details can be found in the order confirmation email you’ve
        received.</p>
        <h3>Q: How do I track my order?</h3>
        <p>A: Once shipped, you’ll get a confirmation email that includes a tracking number and additional
        information regarding tracking your order.</p>
        <h3>Q: What’s your return policy?</h3>
        <p>A: We allow the return of all items within 30 days of your original
        order’s date. If you’re interested in returning your items, send us an
        email with your order number and we’ll ship a return label.</p> 
        <h3>Q: How do I make changes to an existing order?</h3>
        <p>A: Changes to an existing order can be made as long as the order is still in “processing” status. Please
        contact our team via email and we’ll make sure to apply the needed
        changes. If your order has already been shipped, we cannot apply any
        changes to it. If you are unhappy with your order when it arrives,
        please contact us for any changes you may require.</p>
        <h3>Q: Do you ship internationally?</h3>
        <p>A: No wr do not ship internationally.</p> 
        <h3>Q: Do you sell gift cards?</h3>
        <p>A: No we don't offer gift cards yet.</p> 
        <h3>Q: Can I receive a refund?</h3>
        <p>A: If you are unhappy with the product you’ve received, you can get a
        refund but only if u return the product right after it's arrival.</p> 
        <hr/>
        <h1 className="mt-5">FAQ - About the Company </h1>
        <h3 className="mt-3">Q: About the company</h3>
        <p>A: Company was founded in 2021, with a goal to bring
        Sweets to every home across the India.</p> 
        <h3>Q: What payment methods do you accept?</h3> 
        <p>A:We only accept cash on delivery not but soon other methods will be added.</p> 
        <h3>Q: What does the warranty cover?</h3> 
        <p>The warranty covers defects in materials. It does not cover issues
        caused by damage due to shipment, handling, storage, accident, impact,
        abuse or misuse.</p> 
        <h3>Q: Where are you located? </h3>
        <p>Our headquarters are located in Connecticut, USA.</p> 
        <h3>Q: How can I contact you?</h3> 
        <p>A: If you have a question, comment, suggestion or want to reach out for any other
        reason, you can contact our team at team@company.com, +1 123 456 7890 or
        through our chat assistant.</p>
        </div>
        <div className="container mt-4 px-3 py-5">
        <div className="row px-5">
          <div className="col-6">
            <span className='text-dark'><i class="fas fa-quote-left fa-3x"></i></span>
          </div>
          <div className="col-6" align="end">
            <span className="text-dark text-end"><i class="fas fa-quote-right fa-3x"></i></span>
          </div>
        </div>
          <h1 className="text-center" style={{color:"orange"}}>Thank You For Visiting Our Website</h1>
      </div>
      </div>
    );
  }
}

export default Faq;
