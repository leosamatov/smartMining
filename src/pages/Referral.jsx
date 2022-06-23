import React from "react"

// Components
import {SidebarTemplate} from "../helpers/Template"

function Referral () {

  const copyText = e => {
    e.target.select()
    document.execCommand("copy")

    alert("Copied the text: " + e.target.value)
  }

  return (
    <SidebarTemplate activeItem="/referral">
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
            <div className="title-font text-4xl text-center mb-5 mt-2">Referral Program</div>
            <div className="bg-white overflow-x-hidden rounded-md mb-5 text-lg">
              <div className="p-5 space-y-8">
                <div>
                  Share the Smart Mining platform with others and get rewards. The Smart Mining referral program provides an opportunity for everyone to earn <span className="font-bold">20%</span> of the deposits of people you have invited.
                </div>
                <div>
                  You invited a friend, he purchased a mining contract worth $1,000, you get <span className="font-bold">$200</span>.
                </div>
              </div>
              <div className="flex px-6 py-4 ref-link">
                <div className="w-1/2 text-white font-bold text-xl leading-10">YOUR REFERRAL LINK</div>
                <div className="w-1/2">
                  <input
                    onClick={copyText}
                    id="ref_link"
                    className="p-2.5 rounded-xl w-full bg-white cursor-pointer text-md text-center"
                    readOnly type="text" value="Referral url"/>
                </div>
              </div>
            </div>
            <div>
              <table className="w-full text-lg">
                <tr>
                  <td>Total clicks:</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Total registrations:</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Total income:</td>
                  <td>$0.00</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="text-center">
            <a href="/referral">
              <img className="m-auto sm:hidden md:block lg:hidden" src="img/Banner-Referal-med.svg" alt=""/>
              <img className="m-auto md:hidden" src="img/Banner-Referal-min.svg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </SidebarTemplate>
  )
}

export default Referral


