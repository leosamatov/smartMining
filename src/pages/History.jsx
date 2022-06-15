import React from "react"

// Components
import {SidebarTemplate} from "helpers/Template"

function History() {

  return (
    <SidebarTemplate activeItem="/history">
      <div className="sm:w-full">
        <nav className="border-b-2 border-gray-200 py-8 sm:hidden lg:block">
          <ul className="flex pt-4 space-x-8">
            <li><a href="/faq">Questions and answers</a></li>
            <li><a href="/#team">Our Team</a></li>
            <li><a href="/contact">Contacts</a></li>
          </ul>
        </nav>
        <div className="content py-10 space-y-10">
          <div>
            <div className="title-font text-4xl text-center mb-5 mt-2">History</div>

            <div className="flex items-center">
              <div className="overflow-x-auto w-full space-y-5">

                <table
                  className="w-full whitespace-nowrap bg-white divide-y divide-gray-300 overflow-hidden rounded-xl">
                  <thead className=" bg-gray-900">
                    <tr className="text-white text-center font-bold text-xl">
                      <th className="px-6 py-2">
                      Amount
                      </th>
                      <th className="px-6 py-2">
                      Type
                      </th>
                      <th className="px-6 py-2">
                      Status
                      </th>
                      <th className="px-6 py-2">
                      Trading Status
                      </th>
                      <th className="px-6 py-2">
                      Comment
                      </th>
                      <th className="px-6 py-2">
                      Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td colSpan="5" className="text-center">Transactions not found</td>
                    </tr>
                  </tbody>
                </table>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarTemplate>
  )
}

export default History


