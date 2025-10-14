import { useState } from 'react'
import challenges from '../content/challenges.json'

export default function WeeklyChallenges() {
  const [expandedChallenge, setExpandedChallenge] = useState(null)

  // StrataScratch challenges data
  const stratascratchChallenges = [
    {
      id: 'salaries-differences',
      title: 'Salaries Differences',
      difficulty: 'Easy',
      difficultyColor: 'bg-green-100 text-green-800',
      platform: 'StrataScratch',
      description: 'Write a query that calculates the difference between the highest salaries found in the Marketing and Engineering departments.',
      problem: `Given a table with employee information, you need to find the salary difference between the highest-paid employee in Marketing and the highest-paid employee in Engineering.

Table Schema:
- id (int): Employee ID
- first_name (varchar): Employee's first name
- last_name (varchar): Employee's last name
- salary (int): Employee's salary
- department (varchar): Employee's department

Expected Output:
- salary_difference (int): The absolute difference between the highest salaries in Marketing and Engineering departments`,
      hints: [
        'Use MAX() function to find the highest salary in each department',
        'Use WHERE clause to filter by department',
        'Use ABS() function to get the absolute difference',
        'Consider using a subquery or CTE for cleaner code'
      ],
      tags: ['SQL', 'Aggregation', 'Subquery', 'Math Functions'],
      estimatedTime: '15-30 minutes',
      link: 'https://platform.stratascratch.com/coding/10308-salaries-differences?code_type=2'
    },
    {
      id: 'highest-cost-orders',
      title: 'Highest Cost Orders',
      difficulty: 'Medium',
      difficultyColor: 'bg-yellow-100 text-yellow-800',
      platform: 'StrataScratch',
      description: 'Find the customer with the highest total order cost and provide details about their orders.',
      problem: `You need to identify the customer who has spent the most money in total across all their orders, and then provide details about their highest-cost orders.

Table Schemas:
customers:
- id (int): Customer ID
- first_name (varchar): Customer's first name
- last_name (varchar): Customer's last name

orders:
- id (int): Order ID
- cust_id (int): Customer ID (foreign key)
- order_date (datetime): Date of the order
- order_details (varchar): Details about the order
- total_order_cost (int): Total cost of the order

Expected Output:
- first_name (varchar): Customer's first name
- last_name (varchar): Customer's last name
- total_order_cost (int): Total cost of all orders
- order_date (datetime): Date of the highest-cost order
- order_details (varchar): Details of the highest-cost order`,
      hints: [
        'First find the customer with the highest total order cost using SUM() and GROUP BY',
        'Use window functions or subqueries to identify the top customer',
        'Then filter orders for that specific customer',
        'Use ROW_NUMBER() or RANK() to find the highest-cost order per customer',
        'Consider using CTEs for better readability'
      ],
      tags: ['SQL', 'Window Functions', 'CTE', 'Joins', 'Aggregation'],
      estimatedTime: '30-45 minutes',
      link: 'https://platform.stratascratch.com/coding/9915-highest-cost-orders?code_type=2'
    },
    {
      id: 'consecutive-days',
      title: 'Consecutive Days',
      difficulty: 'Hard',
      difficultyColor: 'bg-red-100 text-red-800',
      platform: 'StrataScratch',
      description: 'Find users who logged in for 3 or more consecutive days.',
      problem: `You need to identify users who have logged in for at least 3 consecutive days. This is a classic problem that requires understanding of window functions and date manipulation.

Table Schema:
sf_events:
- id (int): Event ID
- user_id (int): User ID
- date (datetime): Date of the event (login)
- event_type (varchar): Type of event (e.g., 'login')

Expected Output:
- user_id (int): User ID
- consecutive_days (int): Number of consecutive days logged in

Note: A user is considered to have logged in on consecutive days if they have events on consecutive calendar days.`,
      hints: [
        'Use ROW_NUMBER() window function to create a sequence',
        'Calculate the difference between the login date and the row number to identify consecutive days',
        'Group by user_id and the calculated difference to find consecutive day groups',
        'Filter groups that have 3 or more consecutive days',
        'Consider using LAG() or LEAD() functions for alternative approaches'
      ],
      tags: ['SQL', 'Window Functions', 'Date Functions', 'CTE', 'Advanced SQL'],
      estimatedTime: '45-60 minutes',
      link: 'https://platform.stratascratch.com/coding/2054-consecutive-days?code_type=2'
    }
  ]

  const toggleChallenge = (challengeId) => {
    setExpandedChallenge(expandedChallenge === challengeId ? null : challengeId)
  }

  return (
    <section id="challenges" className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="mx-auto max-w-content px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Weekly Coding Challenges
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sharpen your SQL skills with our curated challenges from StrataScratch. 
            From beginner-friendly problems to advanced analytics, there's something for every level.
          </p>
        </div>

        {/* StrataScratch Challenges */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm border border-slate-200">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">StrataScratch Challenges</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {stratascratchChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* Challenge Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-xl font-semibold text-slate-900">
                          {challenge.title}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${challenge.difficultyColor}`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-3">{challenge.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{challenge.estimatedTime}</span>
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {challenge.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <button
                      onClick={() => toggleChallenge(challenge.id)}
                      className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {expandedChallenge === challenge.id ? (
                        <>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          Hide Details
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          View Problem
                        </>
                      )}
                    </button>
                    
                    <a
                      href={challenge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-sky-600 text-sky-600 hover:bg-sky-50 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Solve on StrataScratch
                    </a>
                  </div>

                  {/* Expanded Content */}
                  {expandedChallenge === challenge.id && (
                    <div className="border-t border-slate-200 pt-6">
                      {/* Problem Statement */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-slate-900 mb-3">Problem Statement</h5>
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
                            {challenge.problem}
                          </pre>
                        </div>
                      </div>

                      {/* Hints */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-slate-900 mb-3">Hints</h5>
                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                          <ul className="space-y-2">
                            {challenge.hints.map((hint, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-amber-800">
                                <span className="flex-shrink-0 w-5 h-5 bg-amber-200 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">
                                  {index + 1}
                                </span>
                                <span>{hint}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Kaggle Challenges Section */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm border border-slate-200">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">More Challenges</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.challenges.slice(0, 6).map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-slate-900 line-clamp-2">
                      {challenge.title}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      challenge.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                      challenge.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {challenge.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {challenge.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                    {challenge.tags.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-md text-xs">
                        +{challenge.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {challenge.estimatedTime}
                    </span>
                    <a
                      href={challenge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      Start Challenge
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#resources"
              className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              View All Resources
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
