/* eslint-disable react/no-unescaped-entities */
import React from "react"

// Helpers
import Template, {WhiteBgContainer} from "helpers/Template"
import Footer from "helpers/Footer"

// Components
import TopBar from "components/organisms/TopBar"

function TermsAndCondition () {
  return (
    <Template classes="main-content-bg">
      <WhiteBgContainer>
        <TopBar showJumbotron={false} isTransparent={true}/>

        <div className="py-20 text-white">
          <div className="container">
            <div className="space-y-6">
              <h1 className="text-7xl text-center pb-20">
                TERMS AND CONDITIONS
              </h1>

              <p>TRONMINING TERMS OF SERVICE<br/>
                  INTRODUCTION<br/>
                  THESE TERMS OF SERVICE APPLY TO THE USE OF THE MINING-TRON .COM CLOUD MINING SERVICE AND TRONMINING
                  WEBSITE LOCATED AT MINING-TRON .COM AND ITS SUBDOMAINS. THE WEBSITE AND THE SERVICE ARE THE PROPERTY
                  OF MINING-TRON COMPANY.</p>

              <p>THEY SET OUT HOW THE MINING-TRON .COM CLOUD HOSTED CRYPTOCURRENCY MINING SERVICE WORKS AND DESCRIBE
                  ANY ASSOCIATED RIGHTS AND RESPONSIBILITIES. THE MINING-TRON .COM TERMS OF SERVICE AND ANY
                  INSTRUCTIONS, GUIDANCE AND SIMILAR INFORMATION FOUND ON THE WEBSITE (FROM TIME TO TIME) ALSO APPLY TO
                  HOW YOU USE THE MINING-TRON .COM CLOUD MINING SERVICE (TOGETHER THE "AGREEMENT"). BY USING THE WEBSITE
                  AND/OR THE SERVICE, YOU AGREE TO THESE TERMS OF SERVICE; IF YOU DO NOT AGREE, DO NOT USE THE SITE
                  AND/OR THE SERVICE.</p>

              <p>MINING-TRON RESERVES THE RIGHT, AT ITS SOLE DISCRETION, TO AMEND, CHANGE, MODIFY, ADD OR REMOVE
                  PORTIONS OF THESE TERMS OF SERVICE, AT ANY TIME. IT IS YOUR RESPONSIBILITY TO CHECK THESE TERMS
                  PERIODICALLY FOR CHANGES. THE CURRENT VERSION OF THESE TERMS IS AVAILABLE AT HTTPS://MINING-TRON
                  .COM/TERMS. YOUR CONTINUED USE OF THE WEBSITE AND/OR THE SERVICE FOLLOWING THE PUBLISHED UPDATES TO
                  THE TERMS WILL MEAN THAT YOU ACCEPT AND AGREE TO THE CHANGES. AS LONG AS YOU AGREE AND COMPLY WITH
                  THESE TERMS, MINING-TRON GRANTS YOU A PERSONAL, NON- EXCLUSIVE, NON-TRANSFERABLE, LIMITED PRIVILEGE TO
                  ENTER AND USE THE WEBSITE AND THE SERVICE.</p>

              <p>CLOUD MINING INVOLVES FINANCIAL RISKS AND MAY NOT BE APPROPRIATE FOR ALL PEOPLE. THE INFORMATION
                  PRESENTED HERE IS FOR INFORMATION AND EDUCATIONAL PURPOSES ONLY AND SHOULD NOT BE CONSIDERED AN OFFER
                  OR SOLICITATION TO INVEST TO MINING-TRON OR ELSEWHERE. ANY INVESTMENT DECISIONS THAT YOU MAKE ARE
                  SOLELY YOUR RESPONSIBILITY. MINING-TRON DOES NOT PROVIDE SERVICE FOR USA RESIDENTS.</p>

              <p>1. ABOUT THE SERVICE, THE WEBSITE AND THESE TERMS OF SERVICE</p>

              <p>1.1. This is an agreement (referred to as "Terms") between MINING-TRON company - Nr. 143 556 965,
                  Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands MH96960, +420 517 810
                  282 (also referred to in these Terms as "MINING-TRON", "MINING-TRON ", "we", "us" or "our") and you
                  (also referred to in these Terms as "Customer", "you", "your"), the person accessing and using the
                  mining-tron.com cloud mining service and accepting these Terms. <br/>
                    1.2. In these Terms: <br/>
                    1.2.1. a reference to "Cryptocurrency", "Cryptocurrencies" is a reference to the distributed,
                    decentralized peer-to- peer digital currencies: <br/>
                    1.2.1.1. "Bitcoins" is a reference to a Cryptocurrency known as Bitcoin; <br/>
                    1.2.1.2. "Altcoins" is a reference to all Cryptocurrencies other than Bitcoin, such as
                    Litecoin; <br/>
                    1.2.2. "Miners" are individuals who register to mine Bitcoins and/or Altcoins with a Cloud Machine.
                    If you successfully apply to administer a Cloud Machine, you will be a Miner; <br/>
                    1.2.3. a "Mining Pool" is an organized association of Cryptocurrencies miners. The members of these
                    associations work together to mine Cryptocurrencies and those Cryptocurrencies are distributed
                    amongst the membership based on the contribution made to the mining by each member; <br/>
                    1.2.4. the "Mining Hardware" is the computer hardware, not owned but used as a source of mining
                    efficiency and costs calculation by MINING-TRON mining; <br/>
                    1.2.5. "Hashrate" or "Hash rate" is the mining power of the Mining Hardware used to mine
                    Cryptocurrencies. Hashrate is mining algorithm specific (SHA-256, Scrypt, X11 etc); <br/>
                    1.2.6. "Cloud Machine" is the virtual mining power of the Service purchased by a Miner and
                    administered by a Miner using the Website. “Cloud Machine” is a derivative of a real mining machine;<br/>
                    1.2.7. "Service" is MINING-TRON mining contract, which enables individuals to virtually mine
                    Cryptocurrencies for themselves. MINING-TRON mining contract performance is deriving from Mining
                    Hardware efficiency and costs. MINING-TRON mining “Service” in no way should be considered as a
                    purchase of real mining equipment; <br/>
                    1.2.8. the "Support" or "Customer Support" or "Helpdesk" is the technical support service of
                    MINING-TRON that is provided via email/ticket system, available in the MINING-TRON knowledge
                    base/FAQ at http://support.mining-tron.com where Customers can find answers to general questions and
                    request assistance by submitting a request; <br/>
                    1.2.9. the "Panel" is the graphical user interface of the Service, with which the Miner interacts to
                    perform all actions related to the Service; <br/>
                    1.2.10. the "Website" is mining-tron.com and any apps, software, emails or other websites which we
                    use to provide the services of mining-tron.com (which includes the Service); <br/>
                    1.2.11. a "Payout" is the periodic deposit to your Balance, dependent on your Cloud Machine.
                    MINING-TRON may change the periodicity of Payouts at any time, to a maximum of once per 24
                    hours; <br/>
                    1.2.12. "Fees" are maintenance and electricity fees, charged daily from the Balance; <br/>
                    1.2.13. "Account" is your personal access to the Service, described further in section 6; <br/>
                    1.2.14. "Balance" is your personal Account balance; <br/>
                    1.2.15. a "Contract" is the access to a Cloud Machine of specific Hash rate; <br/>
                    1.2.16. a "Contract Term" is the period of time for which a Miner has agreed to pay to administer a
                    Cloud Machine, by default, MINING-TRON provides lifetime Contracts that do not have an expiry date,
                    unless stated otherwise; <br/>
                    1.2.17. "Hold" is the state an Account can be placed in that prevents the said Account to make any
                    withdrawals, used as a security measure; <br/>
                    1.2.18. a "Pre-order" is a Contract with a start date in the future. Start date is estimated and is
                    subject to change; <br/>
                    1.2.19. the "Referral Program" or "Partner Program" is the functionality that allows a Customer to
                    receive financial rewards for Contracts purchased by other Customers; <br/>
                    1.2.20. a "Referral Code" is an alphanumerical sequence (at least 6 characters long) that is linked
                    to a Customer's Account; <br/>
                    1.2.21. a "Referral Link" is the URL with a Referral Code, that allows a new Customer to register
                    with MINING-TRON; <br/>
                    1.2.22. a "Referral" is a Customer who registered by using another Customer's Referral Link; <br/>
                    1.2.23. a "Referrer" is a Customer who had another Customer register using their Referral Link; <br/>
                    1.2.24. a "Referral Purchase" or "Referred Purchase" is a purchase made by a Referral; <br/>
                    1.2.25. a "Referral Bonus" is the reward a Referrer receives for a Referral Purchase; <br/>
                    1.2.26. an "Affiliate Network" is a third-party website that allows any person (with or without a
                    MINING-TRON Account) to receive financial rewards for MINING-TRON Contracts purchased by referred
                    Customers. <br/>
                    1.3. These Terms apply to any mining you undertake by using the Service and Website and they form a
                    legal agreement between you and MINING-TRON on the acceptance of you application for an Account (as
                    set out below). <br/>
                    1.4. If there is ever a conflict between these terms of service and the MINING-TRON terms of use or
                    the instructions, guidance and similar information found on the Website, these terms of service will
                    take priority. <br/>
                    1.5. IT IS NOT POSSIBLE FOR US TO STATE DEFINITIVELY HOW MANY BITCOINS, LITECOINS AND/OR ANY OTHER
                    CRYPTOCURRENCY UNITS WILL BE MINED BY ANY MINER AND/OR SPECIFIC CLOUD MACHINE. <br/>
                    1.6. By applying to register as a Miner you are confirming that you understand and accept (and are
                    able to understand and accept) these terms of service and that you agree that you will be bound by
                    them. You should regularly check the Website for changes to the terms of service, instructions,
                    guidance and similar information found on the Website. <br/>
                    1.7. You may only apply to register as a Miner if: <br/>
                    1.7.1. you are 18 years old or over; and <br/>
                    1.7.2. it is lawful for you to do so. <br/>
                    1.8. To register as a Miner, we may require you to provide us with identification or other
                    documentation in order to help us prevent fraud or money laundering. This may include photographic
                    identification and a recent proof of address. We may also undertake our own identity, fraud and
                    credit checks. <br/>
                    1.9. It is forbidden for Miners to visit the Website or use the Service through anonymous proxies
                    (such as Tor) and other services or technologies that hide the real internet connection of the user.<br/>
                    2. RISK NOTICE</p>

              <p>2.1. Actions with Cryptocurrencies carry inherent risks. Due to the fact that Cryptocurrencies are
                  unregulated and decentralized, their value is not insured by any legal entities. The value of any
                  Contract, any amount of any Cryptocurrency is subject to change by MINING-TRON due to a number of
                  factors out of MINING-TRON’ control. These factors include but are not limited to changes of mining
                  difficulty and/or other mining parameters/properties, fluctuating price (in fiat currency to
                  Cryptocurrency exchange rate, such as USD/BTC) of Cryptocurrencies. You understand and agree that the
                  worth of any Contact and any amount of mined Cryptocurrency may lose all worth at any moment of time
                  due to the nature of Cryptocurrencies. You understand that you are solely responsible for management
                  of the Cryptocurrencies in your balance as well as any losses or charges incurred by any third-party
                  entity. <br/>
                    2.2. Any information related to Cryptocurrency and Cryptocurrency mining that is/was posted,
                    published and/or provided by MINING-TRON via any channel of communication (including but not limited
                    to: on the Website, in the Panel, via the Support Service, via Email newsletter, in social media) is
                    subject to change.<br/>
                    3. CRYPTOCURRENCIES</p>

              <p>3.1. You must not mine, buy, sell, exchange, hold, own or otherwise use or exploit Cryptocurrencies
                  in any way which is prohibited by the laws or regulations which apply to you. <br/>
                    3.2. Cryptocurrencies may not be appropriate for everyone. Before mining any Cryptocurrencies you
                    should learn about them to ensure that they are appropriate for you. Like all currencies, there are
                    disadvantages to using Cryptocurrencies. Some of the risks particular to Cryptocurrencies
                    include: <br/>
                    3.2.1. currency fluctuation - the price of Bitcoin and/or any other Cryptocurrency may fall sharply
                    and may even fall to zero; <br/>
                    3.2.2. transactions with Cryptocurrencies may be unconfirmed for a period of time. Although very
                    unlikely, some Cryptocurrency transactions may never be confirmed - Cryptocurrency transactions
                    which are unconfirmed are not completed; <br/>
                    3.2.3. transactions with Cryptocurrencies are irreversible - if you send any amount of any
                    Cryptocurrency to the wrong person, you may be unable to recover those funds; <br/>
                    3.2.4. Cryptocurrencies may be lost if you lose or forget any PINs or passwords necessary to access
                    and spend those Cryptocurrencies; <br/>
                    3.2.5. unknown technical defects inherent in Cryptocurrencies; and <br/>
                    3.2.6. new regulation which impacts the use of Cryptocurrencies. <br/>
                    3.3. By agreeing to these terms of service or by mining Cryptocurrencies by using the Service, you
                    are indicating that you understand, are capable of understanding and accept the risks associated
                    with Cryptocurrencies.<br/>
                    4. REGISTRATION</p>

              <p>4.1. By applying to register, you are making an offer to enter an agreement on these terms of
                  service. Once submitted, you may not withdraw your offer. <br/>
                    4.2. Only we can decide whether applications will be accepted. If your application is accepted, a
                    legal and enforceable agreement will be entered between you and us. Subject to any statutory rights
                    you may have, you may not cancel the agreement covered by these terms of service and you will not be
                    eligible for any refund.<br/>
                    5. CONTRACT TERM AND MINING TERM</p>

              <p>5.1. These Terms of Service are valid indefinitely, even after Account termination. <br/>
                  5.2. The Contract Term for mining-tron.com Cloud Machines is unlimited by default, unless stated
                  otherwise. The Contract is valid while profitable, until expired or until terminated (refer to section
                  13), whichever comes first. <br/>
                  5.3. Contracts with a stated expiry date will end on the date of expiry and the Cloud Machine is
                  stopped. <br/>
                  5.4. Pre-order Contracts that are not activated immediately on purchase will activate on the stated
                  date. <br/>
                  5.5. The Mining process continues until said mining is profitable. This means the Mining process will
                  stop if the Maintenance and Electricity Fees will become larger than the Payout. If mining remains
                  unprofitable for 21 consecutive days the Service is permanently terminated (Hashrate type specific).
                  During the consecutive 21 day period, Payouts and Fees will also be temporarily stopped. If during the
                  suspension period, the Contract- related mining factors (such as the exchange rate and mining
                  difficulty) that are outside of MINING-TRON’s control will change favorably, making mining profitable
                  again, the Service will be unsuspended and contracts reactivated. Initial cost is not refunded after
                  contract ends.<br/>
                  5.6. MINING-TRON reserves the right to change the launch date, Contract Term and/or Mining Term of any
                  Contract.<br/>
                  6. ACCOUNT</p>

              <p>6.1. To register you will need to submit some personal information, a valid email address (that will
                  be used as Username and for user identification) for your Website account ("Account"), a password
                  ("Password"). To be able to withdraw funds you will need to enter at least one wallet for the
                  Cryptocurrency you are mining. The Account may allow you to add more than one Cryptocurrency
                  wallet. <br/>
                    6.2. You must ensure that all information about you that is held by us is true, complete, not
                    misleading and up to date. <br/>
                    6.3. The Username and Password will be allocated to you if you successfully apply for registration
                    as a Miner. <br/>
                    6.4. You will need your Username and Password to access some parts of the Website. Your Username and
                    Password are personal to you and must not be disclosed to any other person. <br/>
                    6.5. The number of accounts is limited to 1 for each beneficiary. <br/>
                    6.6. When you register, you may submit an order to administer a Cloud Machine. This order will allow
                    you to specify the processing power of the Cloud Machine. Only MINING-TRON can decide whether orders
                    will be successful and acceptance is subject to availability, amongst other things. <br/>
                    6.7. Your order is a request to acquire a Contract from us and does not represent a formed contract.
                    If we accept your order, we will associate your Contract with your Account. Until then, an order is
                    considered pending and MINING-TRON reserves the right to decline your payment. <br/>
                    6.8. Subject to the payment of any fees which may be applied, Miners will be able to receive
                    Cryptocurrencies on the basis of the processing power of the Cloud Machine and the period of time
                    for which the Cloud Machine is mining. Miners will only be able to administer the Cloud Machine
                    during the Contract Term. Those Cryptocurrencies will be transferred to your wallet upon your
                    request, if such request is confirmed. <br/>
                    6.9. If you lose access to your Account, MINING-TRON may ask you to provide certain types of data,
                    including personally identifiable information, to determine ownership of the Account. This may
                    include, but is not limited to: proof of identity; proof of residence; proof of telephone
                    number/email ownership and any identifiable activity on the Website, such as transaction IDs, order
                    numbers, withdrawal amounts and others.<br/>
                    7. USE OF YOUR ACCOUNT</p>

              <p>7.1. You may only mine Cryptocurrencies for your own benefit. By using the Website and/or the Service
                  you confirm that you are not acting for the benefit of any other person or entity. <br/>
                    7.2. We are entitled to assume that any use of your Account is made by you. You are solely
                    responsible and liable for any use of the Website or the Service under your Account or any other use
                    of your Username and Password. <br/>
                    7.3. You may only hold one Account. If you forget your Username or Password, you can use the
                    password recovery option or contact Support. <br/>
                    7.4. DO NOT SHARE YOUR PASSWORD WITH ANY OTHER PERSON OR ALLOW ANY OTHER PERSON TO USE YOUR ACCOUNT.
                    WE ARE NOT LIABLE FOR ANY IMPROPER USE OF YOUR PASSWORD OR ACCOUNT BY YOU OR ANY OTHER PERSON. IF
                    YOU HAVE REASONS TO ASSUME THAT ANY OTHER PERSON KNOWS YOUR PASSWORD, OR THAT YOUR ACCOUNT HAS BEEN
                    USED BY ANY OTHER PERSON, YOU MUST INFORM US IMMEDIATELY. <br/>
                    7.5. If you do not log into your Account for 12 months, we may terminate the Account. You will be,
                    if possible, notified in advance. If we are unable to contact you, or you do not take any action to
                    prevent account termination, your Balance will be nullified.<br/>
                    8. RESTRICTIONS AND OBLIGATIONS</p>

              <p>8.1. You agree to comply with all applicable laws and regulations, these terms of service and all
                  rules applicable to the use of the Website and the Service. <br/>
                    8.2. You agree not to falsely describe or otherwise misrepresent yourself in any dealings with
                    MINING-TRON . <br/>
                    8.3. You are not allowed to abuse any campaigns, discounts, referral bonuses and/or referral
                    systems, provided from time to time by MINING-TRON and/or its partners. <br/>
                    8.4. You are not allowed to use any means to mask your internet traffic and IP address (such as
                    Proxy, Tor, VPN and others). <br/>
                    8.5. Multi-Level Marketing (MLM) and/or High-Yield Investment Projects (HYIP) systems are forbidden
                    from providing any services to their users or partners based on MINING-TRON and/or MINING-TRON,
                    including but not limited to MINING-TRON and/or MINING-TRON Products and/or Services. <br/>
                    8.6. You are strictly forbidden to use or exploit errors in design of the Website, the Service
                    and/or all and any of their parts, features which have not been documented, and/or "program bugs"
                    for commercial/personal gain or as means to disrupt and/or destabilize the Service and/or the
                    Website. If you encounter such an error by accident, you are required to report your findings to
                    support@mining-tron.com.<br/>
                    9. ADMINISTRATION OF MINING</p>

              <p>9.1. During the Contract Term you can use the Website to: <br/>
                  9.1.1. amend or update your registration and contact details; <br/>
                  9.1.2. with the help of customer support deactivate or reactivate your Account as well as terminate an
                  active Contract; <br/>
                  9.1.3. with the help of customer support change the login email address; <br/>
                  9.1.4. change some parameters of the mining of your Cloud Machine; and <br/>
                  9.1.5. change your cryptocurrency-specific wallet addresses. <br/>
                  9.2. Subject to payment and additional Fees in advance, you can use the Website to: <br/>
                  9.2.1. add a new Cloud Machine; and <br/>
                  9.2.2. increase the processing power of your Cloud Machine.<br/>
                  10. BALANCE</p>

              <p>10.1. Your Balance in the Panel is your personal amount of funds available to use. <br/>
                  10.2. The Service may have multiple Balances. Currently available balances are: <br/>
                  10.2.1. BTC Balance is measured in BTC (Bitcoins), accurate to <br/>
                  0.00000001 BTC (1 satoshi, the minimum indivisible amount of BTC); <br/>
                  10.2.2. ETH Balance is measured in ETH (Ethereum), accurate to <br/>
                  0.00000001 ETH (10 GWei). <br/>
                  10.3. Other Cryptocurrency Balances may be introduced and/or removed at any time. <br/>
                  10.4. Funds mined will be transmitted directly to your Balance. This may take up to 24 hours from the
                  date the coins are generated. <br/>
                  10.5. Balance can be used in the following ways: <br/>
                  10.5.1. You are able to withdraw your balance at any time if it meets the minimum requirement, unless
                  stated otherwise (subject to change). <br/>
                  10.5.2. You are able to purchase additional Contract(s) for the Cloud Machine(s) to increase your
                  total Hashrate. <br/>
                  10.6. MINING-TRON reserves the right to make retroactive recalculations to Balance(s), Cloud Machines,
                  Hash rate and logs, including but not limited to, in the case of any error occurring in the Service,
                  to correct any mistakes or discrepancies. <br/>
                  10.7. Balance may be negative. In such case, the Balance must become positive above the minimum
                  requirement before any withdrawals and/or purchases can be made using it.<br/>
                  11. FEES</p>

              <p>11.1. We provide a platform which enables individuals to mine cryptocurrencies using cloud Machine.
                  In return, we charge periodic maintenance and electricity fees ("Fees") that are deriving from the
                  usage of electricity as well as the cost of maintenance of the Mining equipment. The maintenance costs
                  of running the equipment include but are not limited to: hardware setup, data center rent, Mining Pool
                  testing, staff salaries, future planning and proofing, software development, exchange of used and out
                  of order parts and other expenditures required to render the service on a best-effort basis. Some
                  Contract types are not subject to periodic Fees. The presence and specification of Fees for each
                  Contract type can always be seen on the Website. <br/>
                    11.3. The Fees are deducted from your Balance once a day immediately after a Payout for all active
                    Cloud Machines (if more than 1 are active). <br/>
                    11.4. MINING-TRON reserves the right to change the fees at any time without prior notice. <br/>
                    11.5. Fees are non-refundable.<br/>
                    12. LIABILITY</p>

              <p>12.1. We provide and maintain the Website and the Service on an "AS IS" and "AS AVAILABLE" basis and
                  we are liable only to provide our services with reasonable skill and care. <br/>
                    12.2. We give no other warranty in connection with the Website or the Service and we disclaim all
                    liability for: <br/>
                    12.2.1. to the extent allowed by these Terms and without affecting any other clauses within Section
                    12, that may apply, accuracy, currency or validity of information and material contained within
                    and/or provided by the Website, the Panel, the Support Service, in email newsletters and social
                    media. You hereby agree, that no radio, computer and internet communication equipment is completely
                    free of fault, occasional technical disruptions may affect the service and so can human error, which
                    may result in misrepresentation of content or miscommunication; <br/>
                    12.2.2. any change in the exchange rate of Bitcoins or any other Cryptocurrency; <br/>
                    12.2.3. any change in the difficulty of mining; <br/>
                    12.2.4. any changes in applicable law or regulation, or the acts of any legislator or regulator in
                    any part of the world; <br/>
                    12.2.5. any interruptions to or error of the Website or the Service or other communications
                    network; <br/>
                    12.2.6. the infringement by any other person of any copyright or other intellectual property rights
                    of any third party through any User Content or use of the Website or the Service; <br/>
                    12.2.7. the availability, quality, content or nature of External Sites; <br/>
                    12.2.8. any amount or kind of loss or damage due to viruses or other malicious software that may
                    infect a user's computer equipment, software, data or other property caused by any other person
                    accessing, using or downloading the Website, the Service or any User Content; and <br/>
                    12.2.9. all representations, warranties, conditions and other terms and conditions which, but for
                    this notice, would have effect. <br/>
                    12.3. We will not be liable in any amount for failure to perform any obligation under these terms of
                    service if that failure is caused by the occurrence of an event beyond our reasonable control. <br/>
                    12.4. Except as provided above there are no other warranties, conditions or other terms and
                    conditions, express or implied, statutory or otherwise, and all of those terms and conditions are
                    hereby excluded to the maximum extent permitted by law. <br/>
                    12.5. To the maximum extent permitted by law, we exclude liability for any losses or damages which
                    you may suffer, whether the same are suffered directly or indirectly or are immediate or
                    consequential, which fall within any of the following categories: <br/>
                    12.5.1. special damage even though that party was aware of the circumstances in which such special
                    damage could arise; <br/>
                    12.5.2. loss of anticipated savings; <br/>
                    12.5.3. loss of business opportunity and management time; <br/>
                    12.5.4. loss of goodwill; <br/>
                    12.5.5. loss of Cryptocurrency arising as a result of any of your acts or omissions of those of any
                    third party; <br/>
                    12.5.5.1. loss arising out of or in connection with: <br/>
                    12.5.5.2. any defect or insecurity in any systems you use to store or transmit Cryptocurrency or to
                    access or use the Website or the Service ; <br/>
                    12.5.5.3. any inaccurate or incomplete information you provide, including Cryptocurrency wallet
                    addresses; <br/>
                    12.5.5.4. any changes to the amount of Cryptocurrency awarded to Miners; <br/>
                    12.5.5.5. any changes to the regulatory, legislative or technical environment applicable to
                    Cryptocurrencies; <br/>
                    12.5.5.6. the acts or omissions of any bank or provider of banking services; or <br/>
                    12.5.5.7. any change in the value of Cryptocurrency howsoever arising (including as a result of the
                    acts or omissions of MINING-TRON ). <br/>
                    12.6. To the maximum extent permitted by law, our aggregate liability in respect of any claims made
                    in connection with or arising out of the use of the Website or the Service (whether in contract,
                    tort (including negligence), breach of statutory duty, or otherwise) for direct losses will be
                    limited to the Fees. <br/>
                    12.7. You agree not to use the Website or the Service in any way which: <br/>
                    12.7.1. is unlawful; <br/>
                    12.7.2. may give rise to civil or criminal liability for MINING-TRON ; or <br/>
                    12.7.3. may bring MINING-TRON into disrepute. <br/>
                    12.8. You hereby agree to indemnify, defend and hold us and our officers, directors, owners, agents,
                    information providers, affiliates, licensors and licensees (collectively, the "Indemnified Parties")
                    harmless from and against any and all liability and costs (including reasonable legal fees) incurred
                    by the Indemnified Parties in connection with any claim arising out of: <br/>
                    12.8.1. any fraud or fraudulent misrepresentation you commit; <br/>
                    12.8.2. any inaccuracy or defect of any of the information you have provided to us; <br/>
                    12.8.3. any breach of applicable law or regulation you commit; <br/>
                    12.8.4. any other person’s use of your Account; <br/>
                    12.8.5. any breach by you of these terms of service; and <br/>
                    12.8.6. third party claims arising from your use of the Website or the Service, any of Your Content
                    or any use of your Account (whether or not such use was by you). <br/>
                    12.9. You shall cooperate with us in the defense of any claim. We reserve the right, at our own
                    expense, to assume the exclusive defense and control of any matter otherwise subject to
                    indemnification by you.<br/>
                    13. BREACH, SUSPENSION AND TERMINATION</p>

              <p>13.1. Without limiting any other rights we have, we may suspend or terminate access to your Account,
                  the Website and/or the Service, nullify your Account Balance and/or hold the ability to withdraw mined
                  funds if you breach any of these Terms of Service. <br/>
                    13.2. If we have grounds to suspect that you are using the Website or the Service fraudulently or
                    improperly, we will suspend your Account until you are able to demonstrate to our satisfaction: <br/>
                    13.2.1. your identity; and <br/>
                    13.2.2. that no fraud or impropriety has occurred or been attempted. <br/>
                    13.3. We will try to give you reasonable notice of any anticipated termination of the Website or the
                    Service. <br/>
                    13.4. If you become aware of or suspect another user or Miner's breach of these terms of service, or
                    any fraud or impropriety by another user, you must contact us immediately. <br/>
                    13.5. In case of any Credit Card purchase (refer to section 14.5.4.) MINING-TRON has the right to
                    place the Customer's Account on Hold (hold the ability to withdraw any mined funds from the
                    Customer's Account Balance) for a period of up to 30 days as a security measure of anti-fraud
                    related regulations and policies.<br/>
                    14. PAYMENT TERMS, ORDER CANCELLATION, ORDER CHANGES AND ORDER REFUNDS</p>

              <p>14.1. All invoices are issued in USD (United States dollar) by default. Payments performed in any
                  other currency must account for the exchange rate of said currency to USD at the moment of invoice
                  generation and any commissions for currency exchange. <br/>
                    14.2. A Customer is able to purchase a Contract using a variety of payment methods<br/>
                    14.3. A Customer has the right not to pay for the order in case the order has been created but not
                    yet paid, if the Customer decides not to complete the order. The order will be expired after a given
                    period of time (dependent on the payment method) and the Customer will not be obliged to proceed
                    with the order. MINING-TRON will not process requests to cancel unpaid orders, as it is intended the
                    unpaid orders will be expired.<br/>
                    14.4. A Customer is solely responsible for the accuracy of payment, including but not limited to:
                    the destination account, transferable amount and payment details: <br/>
                    14.4.1. If the transferred amount is below requested, MINING-TRON reserves the right, at its sole
                    discretion, to adjust the Contract accordingly to received funds or request the missing amount to be
                    paid, before activating the Contract. <br/>
                    14.4.2. If the transferred amount is above requested, MINING-TRON reserves the right, at its sole
                    discretion, to adjust the Contract accordingly to received funds, add the excessive amount to
                    Customer's Account Balance or return the excessive amount through the payment system the Customer
                    has used to pay for the order initially. <br/>
                    14.4.3. If the Customer initiates the payment with incorrect/insufficient details and/or to the
                    wrong destination account, MINING-TRON will attempt, if possible, to process the order in a timely
                    matter. If the destination address does not belong to MINING-TRON (directly or via a third-party
                    service) and/or is not related to MINING-TRON in any way, MINING-TRON will not be held responsible
                    and will decline any claims. <br/>
                    14.4.4. MINING-TRON is not obliged to proactively resolve payment related issues without a claim
                    submitted by the Customer. <br/>
                    14.5. In case of payment related issues a claim must be raised: <br/>
                    14.5.1. A Customer has the right to raise a payment related claim/dispute by contacting support
                    within 14 days from the creation of payment with proof of payment. Requests submitted after 14 days
                    may not be processed. <br/>
                    14.5.2. MINING-TRON reserves the right to request proof of payment, if there are suspicions or facts
                    the payment was not received but the Contract was activated. The Customer is obliged to provide
                    proof of payment within 14 days of reception of such request. <br/>
                    14.5.3. Proof of payment includes but is not limited to: MINING-TRON order number, unique
                    transaction ID or number, destination account, transferred amount, account statement from the
                    payment system used. <br/>
                    14.5.4. Credit Card purchases may require proof of ownership of the payment method and an
                    identification request. <br/>
                    14.5.5. If proof of payment is not provided within 14 days or provided proof is deemed insufficient
                    and/or invalid: <br/>
                    14.5.5.1. if the claim was initiated by a Customer: MINING-TRON reserves the right to decline
                    Customer's claim(s); <br/>
                    14.5.5.2. if the claim was initiated by MINING-TRON: MINING-TRON reserves the right to adjust/cancel
                    related Contracts and adjust Customer's Account Balance by amounts mined by related Contract. <br/>
                    14.6. Unless otherwise provided by law or by a particular offer, all purchases are final and
                    non-refundable. MINING-TRON reserves the right to issue refunds at MINING-TRON 's sole discretion.
                    If we issue a refund, we are under no obligation to issue the same or similar refund in the future.
                    This refund policy does not affect any statutory rights that may apply. <br/>
                    14.7. In the case of a refund: <br/>
                    14.8.1. Customer will receive a reimbursement of spent funds to start the service, unless any funds
                    were withdrawn from Customer's Account Balance. If any amount was successfully withdrawn from the
                    Account Balance, no refund requests will be processed on said Account. <br/>
                    14.9.2. MINING-TRON has the right to nullify or deduct any Hashrate and/or funds mined by the
                    Hashrate of the refunded purchase from the Customer's Account Balance as well as any funds provided
                    as a Referral Bonus for the refunded purchase from the Referrer's Account Balance. <br/>
                    14.9.3. MINING-TRON is not obliged to reimburse any funds spent for the Maintenance and Electricity
                    Fees. <br/>
                    15. COMMUNICATIONS</p>

              <p>15.1. The Website may enable the display of third party content ("User Content"). <br/>
                  15.2. Although we are not obliged to do so, we may remove or reject any User Content. <br/>
                  15.3. You agree that we may process and store any content you submit to the Website ("Your
                  Content"). <br/>
                  15.4. You may be able to send Your Content to other Miners of the Website, and other Miners of the
                  Website may be able to send User Content to you. <br/>
                  15.5. You agree to the distribution of Your Content by us both internally and externally. Therefore,
                  you should ensure that Your Content does not contain information, which you intend to keep
                  confidential or private. <br/>
                  15.6. By making available, posting or transmitting Your Content to the Website, you are granting us a
                  non-exclusive, transferable, sublicensable, royalty-free, irrevocable, perpetual worldwide license to
                  use and exploit Your Content for any purpose. <br/>
                  15.7. You agree that you are entitled to make available, post or transmit Your Content to the
                  Website. <br/>
                  15.8. You will not make available, post or transmit to the Website any statement, material or other
                  content, nor use the Website in any way, that: <br/>
                  15.8.1. is unlawful or may give rise to civil or criminal liability; <br/>
                  15.8.2. infringes any copyright or other intellectual property rights of any third party; <br/>
                  15.8.3. infringes any third party's rights of privacy or rights of publicity; <br/>
                  15.8.4. includes any computer virus or other malicious software; <br/>
                  15.8.5. is abusive, pornographic, defamatory, discriminatory or obscene; <br/>
                  15.8.6. harasses any other person; <br/>
                  15.8.7. interferes with another user's use and enjoyment of the Website; <br/>
                  15.8.8. impersonates any moderator, administrator or any staff or any other person connected with
                  MINING-TRON ; <br/>
                  15.8.9. contains the confidential information of any other person; <br/>
                  15.8.10. solicits passwords or personal information; <br/>
                  15.8.11. contains video, photographs, or images of any other person without his or her permission (or
                  in the case of a minor, the minor's legal guardian); <br/>
                  15.8.12. exploits any other person; <br/>
                  15.8.13. we consider inappropriate; or <br/>
                  15.8.14. encourages or provokes any other person to do any of the acts listed above. <br/>
                  15.9. The Website may provide means by which you can communicate with us. We will communicate with you
                  at the email address you have provided or through other means of communication that may be provided by
                  the Website. Notices that are applicable to all our Miners shall be made available on the Website
                  publicly. You will be deemed to have received a notice at the time the email is sent or the time the
                  notice is posted on the Website. We will be deemed to have received a notice when we issue a
                  confirmation to you. <br/>
                  15.10. All emails (or other messages) we send are intended for the addressee only.<br/>
                  16 . Confidentiality</p>

              <p>16.1 The customer should not disclose any information, related to the Company, including but not
                  limited to information on accounts, operations, clients of the Company, accounts opened for the
                  clients, balance and operations on the accounts of clients and any other information related to the
                  clients of the Company and their activity, information on shareholders, managers, employees of the
                  Company, its affiliates, partners and contractors, any agreements concluded between Company and any
                  other party, its projects and products, marketing strategies and plans, financial information and
                  statements, and any other information that should be reasonably recognized as confidential in
                  accordance with applicable legislation.<br/>
                    16.2 In case of forced disclosure of the information listed hereabove on demand of governmental and
                    regulating authorities, customer shall inform the Company on the day of receiving the appropriate
                    request.<br/>
                    16.3 In case of unauthorized disclosure of the aforementioned information or any other violation of
                    this confidentiality provision by the customer, the Company has the right to terminate the Agreement
                    and to close the account without any prior notices and with immediate effect.<br/>
                    17. GENERAL</p>

              <p>17.1. These terms of service are subject to your statutory and common law consumer rights and will
                  not limit any rights you might have that cannot be excluded under applicable law. These terms of
                  service will not exclude or limit our liability for death or personal injury resulting from our
                  negligence nor any fraudulent acts or representations or for any statutory liability not capable of
                  limitation. <br/>
                    17.2. We may deduct any monies you owe us from any monies we owe you. <br/>
                    17.3. These terms of service, together with the terms of use, privacy policy and any instructions,
                    guidance and similar information found on the Website (from time to time), constitute the entire
                    agreement between you and MINING-TRON relating to your use of the Website and the Service and mining
                    through the Website or the Service, to the exclusion of any other terms. <br/>
                    17.4. Our failure to enforce any term does not constitute our waiver of that term. <br/>
                    17.5. If any part of these Terms is found to be unenforceable, it will be amended to the minimum
                    extent necessary to make it enforceable and the remainder of the provisions will remain in full
                    force and effect. <br/>
                    17.6. No representation or warranty is made as to whether the Website or the Service complies with
                    the laws of any jurisdiction other than Australia. <br/>
                    17.7. The parties submit to the exclusive jurisdiction of the Australia courts. These terms of
                    service are subject to and interpreted in accordance with the laws of Australia, provided that these
                    terms of service shall not be interpreted as conferring any statutory Australia consumer protection
                    laws, including any rights of withdrawal or cancellation under implementations of Directive
                    2011/83/EU on consumer rights, on any individual not ordinarily a resident of an Australia Member
                    State. <br/>
                    17.8. This Website the Panel are presented in multiple languages. In the case of a conflict between
                    translations, the English version will prevail. <br/>
                    17.9. MINING-TRON will be entitled to assign and otherwise transfer the agreement covered by these
                    terms of service by giving you reasonable notice, which may include notice given via the
                    Website. <br/>
                    17.10. All questions, comments or complaints should be directed to us via Customer Support and we
                    will try to respond to within 48 hours.<br/>
                    18. PLEDGING</p>

              <p>18.1. When pledging a contract, you receive the residual value from the contract on the balance of
                  your trading account, depending on the number of days remaining on the contract.<br/>
                    18.2. When pledging at least one of the contracts, all withdrawals from the account become
                    unavailable.<br/>
                    18.3. You can pledge any number of contracts and for any amount.<br/>
                    18.4. The repayment of the pledged contract can be made at any time from the contract account for
                    the amount that was pledged.<br/>
                    18.5. Contract pledging is an additional service provided by MINING-TRON Mining and is optional to
                    use.<br/>
              </p>
            </div>

            <div className="text-center mt-5">
              <a href="/referral">
                <img className="m-auto sm:hidden lg:block" src="img/Banner-Referal-big.svg" alt=""/>
                <img className="m-auto sm:hidden md:block lg:hidden" src="img/Banner-Referal-med.svg" alt=""/>
                <img className="m-auto md:hidden" src="img/Banner-Referal-min.svg" alt=""/>
              </a>
            </div>
          </div>
        </div>

      </WhiteBgContainer>

      <Footer/>

    </Template>
  )
}

export default TermsAndCondition
