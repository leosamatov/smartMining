import React, { useEffect, useMemo, useState } from "react";
import { CALCULATOR_DATA, Bonuses } from "../../config/constants";
import { calculatePower, periodEarn } from "../../helpers/calculations";

function Calculator() {
  // Dropdown logic
  const [showDropdown, setShowDropdown] = useState(null);
  const toggleDropdown = () => setShowDropdown((prevState) => !prevState);

  const [selected, setSelected] = useState({});
  const selectValue = (value) => {
    setSelected(CALCULATOR_DATA.find((el) => el.value === value));
    toggleDropdown();
  };

  // Bonuses logic
  const [bonus, setBonus] = useState(0);
  const [isBonusON, setIsBonusON] = useState(false);
  const toggleBonus = () => setIsBonusON((prevState) => !prevState);

  // Amount logic
  const [amount, setAmount] = useState(200);
  const onAmountChange = (e) => {
    const value = Number(e.target.value);
    if (value !== -1) {
      setAmount(value);
    }
  };
  // Power logic
  const [power, setPower] = useState(0);

  useEffect(() => {
    setPower(calculatePower(amount, isBonusON ? bonus : null));

    const currentContract = CALCULATOR_DATA.find(
      (contract) => contract.range[0] <= amount && amount <= contract.range[1]
    );
    if (currentContract.value !== selected.value) setSelected(currentContract);

    const currentBonus =
      Bonuses.find((_bonus) => _bonus.min <= amount && amount <= _bonus.max)
        ?.percent || 0;
    if (currentBonus !== bonus) setBonus(currentBonus);
  }, [amount]);

  useEffect(() => {
    setPower(calculatePower(amount, isBonusON ? bonus : null));
  }, [bonus, isBonusON]);

  // Payouts
  const daily = useMemo(() => {
    return periodEarn(amount, selected, 1, isBonusON ? bonus : null);
  }, [amount, bonus, isBonusON]);
  const monthly = useMemo(() => {
    return periodEarn(amount, selected, 30, isBonusON ? bonus : null);
  }, [amount, bonus, isBonusON]);
  const annual = useMemo(() => {
    return periodEarn(amount, selected, 365, isBonusON ? bonus : null);
  }, [amount, bonus, isBonusON]);

  return (
    <div id="calculator">
      <div>
        <div className="main-dark-bg text-white relative">
          <div className="container sm:py-12 md:py-16 lg:py-24 sm:pb-20 relative">
            <img
              src="img/Ellipse1.svg"
              className="absolute top-0 left-4 z-30"
            />
            <div className="sm:flex-wrap lg:flex relative sm:space-y-6 lg:space-y-0">
              <div className="sm:w-full lg:w-2/3">
                <div className="-mb-9 font-md sm:text-3xl md:text-6xl title-font">
                  <div className="inline-block md:ml-5 p-2 main-dark-bg">
                    <div className="z-30">Calculator</div>
                  </div>
                </div>

                <div className="md:border border-gray-500 border-opacity-60 md:px-6 lg:px-10 lg:pt-20 sm:pt-10 md:pt-14 pb-12 lg:rounded-r-none rounded-xl lg:border-r-0">
                  <div>
                    <div className="flex space-x-4 pt-4 relative z-50">
                      <div className="sm:w-full md:w-1/2 miner-modal-input sm:pb-1 md:pb-3 uppercase cursor-pointer px-2">
                        <label
                          htmlFor="contract"
                          className="block font-bold text-sm m-0 opacity-60 uppercase"
                        >
                          Contract
                        </label>
                        <div
                          className="flex mw-100 space-x-3 text-xl"
                          onClick={toggleDropdown}
                        >
                          <div
                            className="bg-transparent overflow-hidden w-full whitespace-nowrap"
                            id="contract"
                          >
                            {selected?.label}
                          </div>
                          <div className="p-1 select-arrow">
                            <img
                              className="m-auto"
                              src="img/select-arrow.svg"
                            />
                          </div>
                        </div>
                        <div
                          className="w-full bg-gray-800 mt-2 rounded-b-lg p-3"
                          style={{ display: showDropdown ? "block" : "none" }}
                        >
                          <ul className="space-y-4 py-2">
                            {CALCULATOR_DATA.map(({ label, value }, index) => (
                              <li
                                onClick={() => selectValue(value)}
                                key={index}
                              >
                                {label}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="w-1/4 sm:hidden md:block md:pb-3">
                        <label
                          htmlFor="bonus"
                          className="block font-bold text-sm m-0 opacity-60 uppercase"
                        >
                          Bonus
                        </label>
                        <div className="flex mw-100 space-x-2 text-xl">
                          <div
                            className="checkbox-bonus flex items-center"
                            onClick={toggleBonus}
                          >
                            <img
                              style={{ display: isBonusON ? "block" : "none" }}
                              src="img/check.svg"
                              className="m-auto"
                            />
                          </div>
                          <div className="font-bold leading-7 text-sm">
                            + <span>{bonus}</span>% to power
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sm:flex-wrap md:flex md:space-x-4 sm:pt-4 sm:space-y-16 md:space-y-0">
                      <div className="sm:flex sm:w-full md:w-1/4 sm:space-x-4 md:space-x-0">
                        <div className="sm:w-1/2 md:w-full miner-modal-input pb-3 px-2">
                          <label
                            htmlFor="amount"
                            className="block font-bold text-sm m-0 opacity-60 uppercase"
                          >
                            Amount
                          </label>
                          <div className="flex mw-100 space-x-3 text-xl">
                            <input
                              className="bg-transparent w-full"
                              placeholder="5000"
                              type="number"
                              value={amount}
                              onChange={onAmountChange}
                            />
                            <div className="opacity-60">$</div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:w-full md:w-3/4 lg:w-2/3">
                        <div className="relative">
                          <img
                            src="img/Arro.svg"
                            className="-bottom-14 absolute md:left-0 sm:left-36 z-0"
                          />
                          <div className="miner-slider sm:pt-8 md:pt-14 lg:-mt-6 md:-mt-2 sm:-mt-12 relative z-10">
                            <input
                              value={amount}
                              onChange={onAmountChange}
                              min="200"
                              max="100000"
                              step="1"
                              className="w-full"
                              type="range"
                            />
                          </div>
                          <div className="flex text-sm -mt-1">
                            <div className="w-1/2">
                              {" "}
                              200 <span className="opacity-50">$</span>
                            </div>
                            <div className="w-1/2 text-right">
                              {" "}
                              100 000 <span className="opacity-50">$</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sm:flex-wrap md:flex pt-2">
                      <div className="sm:w-full md:w-2/5 lg:w-1/3">
                        <label className="block font-bold text-sm m-0 opacity-60 uppercase">
                          Power
                        </label>
                        <div className="sm:text-3xl md:text-5xl title-font">
                          <span>{power}</span> GH/S
                        </div>
                      </div>
                      <div className="pt-2 sm:w-full md:w-3/5">
                        <div className="text-right space-x-3">
                          <div className="inline-block">
                            <a href="/" className="btn-orange">
                              <span className="">Deposit</span>
                              <img
                                className="inline-block"
                                src="img/go.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-full lg:w-1/3 lg:pr-28">
                <div className="calc-right relative py-12 sm:px-4 lg:px-5">
                  <div className="absolute top-0 bottom-0 left-0 right-0 calc-blic opacity-20" />
                  <div className="absolute sm:-top-10 md:-top-20 -right-24">
                    <img src="img/monets-fly.png" className="h-40" />
                  </div>
                  <div className="relative space-y-6">
                    <div className="sm:flex lg:flex-wrap lg:space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-4 lg:space-x-0">
                      <div className="sm:w-1/3 lg:w-full">
                        <div className="uppercase opacity-60 text-sm">
                          Daily payout
                        </div>
                        <div className="title-font sm:text-3xl md:text-5xl">
                          $ <span>{daily}</span>
                        </div>
                      </div>
                      <div className="sm:w-1/3 lg:w-full">
                        <div className="uppercase opacity-60 text-sm">
                          Monthly payout
                        </div>
                        <div className="title-font sm:text-3xl md:text-5xl">
                          $ <span>{monthly}</span>
                        </div>
                      </div>
                      <div className="sm:w-1/3 lg:w-full">
                        <div className="uppercase opacity-60 text-sm">
                          Annual payout
                        </div>
                        <div className="title-font sm:text-3xl md:text-5xl">
                          $ <span>{annual}</span>
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex lg:flex-wrap">
                      <div className="text-3xl sm:pr-3 lg:pr-0 text-orange-500">
                        *
                      </div>
                      <div className="leading-4 opacity-70 text-sm md:w-2/4 lg:w-full">
                        This forecast is for information only and does not
                        include altcoin resale
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
