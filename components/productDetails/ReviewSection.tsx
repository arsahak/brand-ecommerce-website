"use client"

import { useState } from "react"
import { BiChevronDown, BiUser } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"

const ratings = [
  { stars: 5, count: 59 },
  { stars: 4, count: 46 },
  { stars: 3, count: 9 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
]

const reviews = [
  {
    title: "Superb quality apparel that exceeds expectations",
    date: "1 days ago",
    content:
      "Great theme - we were looking for a theme with lots of built in features and flexibility and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query and the support given was swift and helpful.",
    reply: {
      author: "Modave",
      date: "5 days ago",
      content:
        "We love to hear it! Part of what we love most about Modave is how much it empowers store owners like yourself to build a beautiful website without having to hire a developer :) Thank you for this fantastic review!",
    },
  },
  {
    title: "Superb quality apparel that exceeds expectations",
    date: "1 days ago",
    content:
      "Great theme - we were looking for a theme with lots of built in features and flexibility and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query and the support given was swift and helpful.",
  },
]

export default function ReviewSection() {
  const [sortBy, setSortBy] = useState("Most Recent")

  return (
    <div className="container mx-auto py-10 ">
      <div className="grid lg:grid-cols-5 gap-8 mb-8">
        {/* Rating Overview */}
          <div className=" items-baseline  col-span-1">
            <span className="text-5xl font-bold">4.9</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600">(168 Ratings)</p>
          </div>


          {/* Rating Bars */}
          <div className="space-y-2 col-span-2 ">
            {ratings.map(({ stars, count }) => (
              <div key={stars} className="flex items-center gap-2 w-[]">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm">{stars}</span>
                  <BsStarFill className="w-4 h-4" />
                </div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-300 rounded-full"
                    style={{
                      width: `${(count / 59) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm w-8">{count}</span>
              </div>
            ))}
            
          </div>
          <div className="lg:col-span-1"></div>

        {/* Write Review Button */}
        <div className="col-span-1">
          <button className="w-full border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition-colors">
            WRITE A REVIEW
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">03 Comments</h3>
          <div className="relative">
            <button className="flex items-center gap-2 text-sm">
              Sort by: {sortBy}
              <BiChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="space-y-6">
              {/* Review */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <BiUser className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-medium">{review.title}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                  <p className="text-gray-600">{review.content}</p>
                </div>
              </div>

              {/* Reply */}
              {review.reply && (
                <div className="flex gap-4 pl-12">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">M</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">Reply from {review.reply.author}</h4>
                      <p className="text-sm text-gray-500">{review.reply.date}</p>
                    </div>
                    <p className="text-gray-600">{review.reply.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

