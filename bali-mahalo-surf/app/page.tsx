"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function BaliMahaloSurfCo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ firstName: "", lastName: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-white p-8 max-w-md">
          <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight">
            Bali Mahalo
            <br />
            Surf Co
          </h1>
          <Button
            onClick={scrollToBooking}
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium"
          >
            Book a Session
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-black">About us</h2>
          <p className="text-xl md:text-2xl text-black leading-relaxed max-w-3xl mx-auto">
            Bali Mahalo Surf Co is dedicated to enhancing your surfing through unique coaching that blends technique
            with the soul of Bali's waves. Our goal is to help you master your craft while staying true to the spirit of
            surfing.
          </p>
        </div>
      </section>

      {/* Hours + Contact Info Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 text-black">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hours</h3>
              <p className="text-lg">Monday–Sunday</p>
              <p className="text-lg">5am–6pm</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Phone</h3>
              <p className="text-lg">+62 881-0371-49065</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Email</h3>
              <p className="text-lg">balimahalosurfcoach@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-center text-black">Book with us!</h2>
          <p className="text-xl text-center mb-12 text-black">
            Available seven days a week. Once you get in touch, we'll coordinate the ideal time based on surf conditions
            and your schedule.
          </p>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-gray-300"
                  />
                </div>

                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-medium">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Surf Trip Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-black">Surf Trip</h2>
              <p className="text-xl text-black leading-relaxed mb-6">
                Craving uncrowded waves and a deeper connection to Indonesia's rich culture? Our surf adventures go
                beyond Bali, guiding you to remote coastlines and hidden gems.
              </p>
              <p className="text-xl text-black leading-relaxed mb-6">
                Whether you're after a single-day escape or a multi-day mission, we've got you covered.
              </p>
              <p className="text-lg text-black font-medium">
                Private and group sessions available (best for intermediate to advanced surfers)
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Skill Training Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              }}
            ></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-black">Skill training</h2>
              <p className="text-xl text-black leading-relaxed mb-6">
                Want to nail a new move like snap, cutback, or floater? Dream of pulling into a barrel? Skill training
                sessions help surfers master specific goals.
              </p>
              <p className="text-xl text-black leading-relaxed mb-6">
                Improve your technique with fun, personalized training.
              </p>
              <p className="text-lg text-black font-medium">
                Private sessions available (best for intermediate to advanced surfers)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">Experience Bali's Waves</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Watch our surf coaching in action and see the incredible waves that await you in Bali's pristine waters.
          </p>
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <div className="w-0 h-0 border-l-8 border-l-black border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
                <p className="text-lg">Video: Surf Coaching Highlights</p>
                <p className="text-sm text-gray-300 mt-2">Click to play when video is added</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Instructors Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black">Meet Your Instructors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div
                className="w-48 h-48 mx-auto mb-6 bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=300&text=Instructor+1')`,
                }}
              ></div>
              <h3 className="text-2xl font-semibold mb-2 text-black">Made Surya</h3>
              <p className="text-lg text-gray-600 mb-4">Head Instructor</p>
              <p className="text-black leading-relaxed">
                Born and raised in Bali, Made has been surfing for over 15 years and coaching for 8. His deep connection
                to the ocean and local knowledge makes every session unforgettable.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-48 h-48 mx-auto mb-6 bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=300&text=Instructor+2')`,
                }}
              ></div>
              <h3 className="text-2xl font-semibold mb-2 text-black">Kadek Ari</h3>
              <p className="text-lg text-gray-600 mb-4">Advanced Technique Coach</p>
              <p className="text-black leading-relaxed">
                Specializing in advanced maneuvers and barrel riding, Kadek helps intermediate and advanced surfers push
                their limits safely and effectively.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-48 h-48 mx-auto mb-6 bg-cover bg-center rounded-full"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=300&text=Instructor+3')`,
                }}
              ></div>
              <h3 className="text-2xl font-semibold mb-2 text-black">Wayan Gede</h3>
              <p className="text-lg text-gray-600 mb-4">Beginner Specialist</p>
              <p className="text-black leading-relaxed">
                Patient and encouraging, Wayan has helped hundreds of beginners catch their first waves. His calm
                approach builds confidence in new surfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black">Surf Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600&text=Perfect+Barrel')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600&text=Sunset+Session')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600&text=Group+Lesson')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600&text=Advanced+Maneuver')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600&text=Bali+Coastline')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600&text=Happy+Students')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Surf Spots Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black">Our Favorite Spots</h2>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-black">Uluwatu</h3>
                <p className="text-xl text-black leading-relaxed mb-4">
                  World-class left-hand barrel perfect for intermediate to advanced surfers. The temple backdrop makes
                  every session spiritual.
                </p>
                <p className="text-lg text-gray-600">
                  Best conditions: Dry season (April-October) • Swell: 4-8ft • Level: Intermediate+
                </p>
              </div>
              <div
                className="h-80 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=500&width=700&text=Uluwatu+Waves')`,
                }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className="h-80 bg-cover bg-center rounded-lg md:order-1"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=500&width=700&text=Canggu+Beach')`,
                }}
              ></div>
              <div className="md:order-2">
                <h3 className="text-3xl font-semibold mb-4 text-black">Canggu</h3>
                <p className="text-xl text-black leading-relaxed mb-4">
                  Consistent beach break with multiple peaks. Perfect for beginners and intermediate surfers looking to
                  progress.
                </p>
                <p className="text-lg text-gray-600">
                  Best conditions: Year-round • Swell: 2-6ft • Level: Beginner to Intermediate
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-black">Padang Padang</h3>
                <p className="text-xl text-black leading-relaxed mb-4">
                  Shallow reef break offering perfect barrels. Made famous by "Eat, Pray, Love" - a true Bali gem.
                </p>
                <p className="text-lg text-gray-600">
                  Best conditions: Dry season (May-September) • Swell: 3-6ft • Level: Advanced
                </p>
              </div>
              <div
                className="h-80 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=500&width=700&text=Padang+Padang')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=100&width=100&text=Sarah')`,
                  }}
                ></div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Sarah Johnson</h4>
                  <p className="text-gray-600">Australia</p>
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed italic">
                "Made's coaching transformed my surfing completely. I went from struggling to catch waves to confidently
                riding barrels. The personalized approach and local knowledge made all the difference."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=100&width=100&text=Marcus')`,
                  }}
                ></div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Marcus Weber</h4>
                  <p className="text-gray-600">Germany</p>
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed italic">
                "The surf trip to hidden spots was incredible. Not only did I improve my technique, but I experienced
                the real Bali that most tourists never see. Unforgettable!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=100&width=100&text=Lisa')`,
                  }}
                ></div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Lisa Chen</h4>
                  <p className="text-gray-600">Singapore</p>
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed italic">
                "As a complete beginner, I was nervous about my first surf lesson. Wayan's patience and encouragement
                helped me catch my first wave on day one. Now I'm addicted!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div
                  className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=100&width=100&text=Jake')`,
                  }}
                ></div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Jake Thompson</h4>
                  <p className="text-gray-600">USA</p>
                </div>
              </div>
              <p className="text-lg text-black leading-relaxed italic">
                "The skill training sessions with Kadek helped me finally nail the cutback I'd been trying to master for
                years. Technical expertise combined with the soul of surfing."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center text-black">Surf Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Beginner Package</h3>
              <p className="text-3xl font-bold mb-6 text-black">
                $75 <span className="text-lg font-normal text-gray-600">/ session</span>
              </p>
              <ul className="space-y-3 mb-8 text-black">
                <li>• 2-hour lesson</li>
                <li>• Surfboard included</li>
                <li>• Wetsuit provided</li>
                <li>• Beach safety briefing</li>
                <li>• Photo package</li>
              </ul>
              <Button className="w-full bg-black text-white hover:bg-gray-800">Book Now</Button>
            </div>

            <div className="bg-black text-white p-8 rounded-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Intermediate Package</h3>
              <p className="text-3xl font-bold mb-6">
                $95 <span className="text-lg font-normal text-gray-300">/ session</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li>• 2.5-hour lesson</li>
                <li>• Advanced technique focus</li>
                <li>• Video analysis</li>
                <li>• Multiple surf spots</li>
                <li>• Personalized feedback</li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-gray-100">Book Now</Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Advanced Package</h3>
              <p className="text-3xl font-bold mb-6 text-black">
                $120 <span className="text-lg font-normal text-gray-600">/ session</span>
              </p>
              <ul className="space-y-3 mb-8 text-black">
                <li>• 3-hour intensive</li>
                <li>• Barrel riding focus</li>
                <li>• Competition preparation</li>
                <li>• Premium surf spots</li>
                <li>• Professional video analysis</li>
              </ul>
              <Button className="w-full bg-black text-white hover:bg-gray-800">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Philosophy Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-black">The Mahalo Spirit</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-xl text-black leading-relaxed mb-6">
                "Mahalo" means gratitude and respect in Hawaiian culture. We bring this spirit to Bali's waves, honoring
                both the ocean and the rich Balinese traditions.
              </p>
              <p className="text-xl text-black leading-relaxed mb-6">
                Our approach goes beyond technique - we teach respect for the ocean, understanding of local customs, and
                the deeper connection that makes surfing a way of life.
              </p>
              <p className="text-lg text-gray-600 italic">
                "Surfing is not just about riding waves, it's about becoming one with the ocean and respecting the
                culture that welcomes you."
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=600&width=500&text=Balinese+Temple+Ocean')`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-black text-white text-center">
        <p className="text-lg">© 2024 Bali Mahalo Surf Co. All rights reserved.</p>
      </footer>
    </div>
  )
}
