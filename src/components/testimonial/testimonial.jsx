import { staticTestimonial } from "../../data/testimonials/testimonialData";

const Testimonial = () => {
    return (
      <div>
        <div>
          <h2 className="text-xl font-workSans font-bold text-mainGreen">
            What Our Customer’s say!
          </h2>
          <div className="grid my-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {staticTestimonial.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 gap-3 rounded-lg flex flex-col items-start justify-center"
              >
                <div className="flex flex-row gap-2 items-start">
                  <div>
                    <img
                      src={testimonial.profilePicture}
                      alt={testimonial.name}
                      className="w-[3rem] h-[3rem] rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-md text-[#000] font-semibold">
                      {testimonial.name}
                    </h1>
                    <h2 className="text-md text-gray-700 font-normal">
                      {testimonial.role}
                    </h2>
                  </div>
                </div>
                <div>
                  <p>{testimonial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="font-workSans flex flex-col justify-center items-center my-10">
          <div className="flex text-center text-xl text-[#000] py-6">
            <h3>Why Choose Farm2Home</h3>
          </div>
          <div className="flex flex-row gap-32 font-workSans text-mainGreen items-center">
            <div>
              <div className="text-4xl font-bold">2000+</div>
              <div className="text-md text-center font-normal">Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">20,000+ Kg</div>
              <div className="text-md text-center font-normal">
                Produce Shipped
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Testimonial;