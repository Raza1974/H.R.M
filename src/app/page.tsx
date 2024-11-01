import Image from 'next/image'
import { Phone, Mail, User } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-gray-500 to-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-green-700 to-gray-400">
          <h1 className="text-3xl font-bold leading-tight text-white text-center">
            Human Resource Department  Town Municiple Corporation  Gadap
          </h1>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Image
                src="/admin.jpg?height=200&width=200"
                alt="Department Head"
                width={200}
                height={200}
                className="rounded-full border-4 border-yellow-400"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-900">Safaraz Ahmed </h2>
              <p className="mt-1 text-lg text-gray-600">Dy.Director Admin</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Welcome to the vibrant world of Administrative Services! Our dynamic team is the backbone 
              of the organization, ensuring everything runs smoothly behind the scenes.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">Our Colorful Responsibilities:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Managing office facilities with flair",
                "Coordinating communications in technicolor",
                "Overseeing document management with precision",
                "Facilitating HR operations with a personal touch",
                "Implementing policies that pop"
              ].map((item, index) => (
                <li key={index} className="flex items-center bg-gradient-to-r from-green-200 to-blue-200 p-2 rounded">
                  <User className="mr-2 text-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-center text-purple-600 mb-4">Contact Our Amazing Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Sarfaraz Ahmed", role: " Dy.Director Admin", phone: "+92 (314) 210-7761", email: "Sarafar.Ahmed@admin.com" },
                { name: "Naseem", role: "Office Superintendent", phone: "+92 (XXX) XXX-XXXX", email: "XXXXX@admin.com" },
                { name: "XXXXX", role: "HR Coordinator", phone: "+92 (XXX) XXX-XXXX", email: "XXXX@admin.com" },
                { name: "XXXXXXXXXX", role: "Document Specialist", phone: "+92 (XXX) XXX-XXXX", email: "XXX@admin.com" }
              ].map((staff, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-100 to-pink-100 p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-lg text-gray-800">{staff.name}</h4>
                  <p className="text-sm text-gray-600">{staff.role}</p>
                  <div className="mt-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-sm">{staff.phone}</span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">{staff.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-4 py-4 sm:px-6 bg-gradient-to-r from-green-700 to-gray-400">
          <p className="text-center text-white">
            Our Aim TO serve the pepole Of Gadap Town!
          </p>
        </div>
      </div>
    </div>
  )
}