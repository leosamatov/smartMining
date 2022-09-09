import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Player } from "@lottiefiles/react-lottie-player";

// Data
import { Bonuses, CALCULATOR_DATA } from "../../config/constants";
import { calculatePower, periodEarn } from "../../helpers/calculations";

function BuyMiners({ show, toggle, setIsCoinSelectorModalOpened, setValue }) {
  const playerRef = useRef(null);

  const [selected, setSelected] = useState({});

  // Bonuses logic
  useEffect(() => {
    document.documentElement.style.overflow = show ? "hidden" : null;
  }, [show]);
  const [bonus, setBonus] = useState(0);
  const [isBonusON, setIsBonusON] = useState(false);
  const toggleBonus = () => setIsBonusON((prevState) => !prevState);

  // Amount logic
  const [amount, setAmount] = useState(200);
  const [errorMessage, setErrorMessage] = useState(null);
  const onAmountChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      const maxValue = 100000;
      if (value <= maxValue) {
        setAmount(value);
        setErrorMessage(null);
      }
      if (!value || value < 200) {
        setErrorMessage(`Invalid amount`);
      }
    }
  };
  useEffect(() => {
    setPower(calculatePower(amount, isBonusON ? bonus : null));

    const currentContract =
      CALCULATOR_DATA.find(
        (contract) => contract.range[0] <= amount && amount <= contract.range[1]
      ) || CALCULATOR_DATA[0];
    if (currentContract.value !== selected.value) {
      setSelected(currentContract);
    }

    const currentBonus =
      Bonuses.find((_bonus) => _bonus.min <= amount && amount <= _bonus.max)
        ?.percent || 0;
    if (currentBonus !== bonus) setBonus(currentBonus);
  }, [amount]);

  useEffect(() => {
    setPower(calculatePower(amount, isBonusON ? bonus : null));
  }, [bonus, isBonusON]);

  // Power logic
  const [power, setPower] = useState(0);

  // Render
  const renderAnimation = (value) => {
    if (value === "small_income") return 1;
    else if (value === "average_income") return 2;
    else if (value === "large_income") return 3;
    else if (value === "individual_income") return 4;
    else return 1;
  };

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

  // Effects
  useEffect(() => {
    const classToAdd =
      selected.value === "small_income"
        ? "h-16"
        : selected.value === "individual_income"
        ? "h-17"
        : "h-48";

    const classToRemove =
      classToAdd === "h-48" ? "h-16" : classToAdd === "h-16" ? "h-17" : "h-48";
    playerRef.current.container.classList.remove(classToRemove);
    playerRef.current.container.classList.add(classToAdd);
  }, [selected]);

  // Functionality
  const valueRef = useRef();
  const buy = (e) => {
    console.log("liked");
    e.preventDefault();

    setIsCoinSelectorModalOpened(true);
    setValue(valueRef.current.value);
  };

  return (
    <div
      style={{ display: show ? "block" : "none", marginTop: 0 }}
      className="z-50 overflow-y-auto fixed top-0 bottom-0 left-0 right-0 bg-opacity-50 bg-gray-900"
    >
      <div
        id="buy_miner_modal"
        className="mx-auto my-4 relative text-white space-y-5"
      >
        <div className="flex text-xl font-bold shadow-md">
          <div style={{ width: "100%" }} id="miner_tab" className="w-1/2 ">
            <a
              href=""
              onClick={(e) => e.preventDefault()}
              className=" leading-10 py-2.5 text-center block"
            >
              BUY MINER
            </a>
          </div>
        </div>
        <div id="miner_tab_content">
          <div className="mx-auto my-4 relative text-white space-y-5 p-8 pt-0">
            <div>
              <a
                href="#"
                onClick={toggle}
                id="close_modal"
                className="absolute top-4 right-4 z-50"
              >
                <img src="img/Close.svg" />
              </a>
            </div>

            <div className="h-20">
              <div className="-mt-5">
                <div className="flex items-center  h-28 justify-content-center">
                  <Player
                    ref={playerRef}
                    src={`img/animation/plan_${renderAnimation(
                      selected.value
                    )}.json`}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-xl uppercase title-font">
                Choose your contract :
              </div>

              <div className="text-sm">
                {selected.label || "Nothing selected"}
              </div>
            </div>

            <form id="deposit_form" action="/deposit" className="space-y-5">
              <div>
                <div className="miner-slider sm:pt-10 md:pt-16 lg:-mt-6 md:-mt-2 sm:-mt-12 relative z-10">
                  <input
                    ref={valueRef}
                    min="200"
                    max="100000"
                    step="1"
                    className="w-full"
                    type="range"
                    value={amount}
                    onChange={onAmountChange}
                  />
                </div>

                <div className="flex text-sm -mt-1">
                  <div className="w-1/2">
                    200 <span className="opacity-50">$</span>
                  </div>
                  <div className="w-1/2 text-right">
                    100 000 <span className="opacity-50">$</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <div className="w-1/3 miner-modal-input pb-3 px-2">
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
                      value={amount}
                      onChange={onAmountChange}
                      type="text"
                      name="amount"
                      id="amount"
                    />
                    <div className="opacity-60">$</div>
                  </div>
                  <p className="calcErrorMessage">
                    {Boolean(errorMessage) && errorMessage}
                  </p>
                </div>

                <div className="w-1/3 miner-modal-input pb-3 px-2">
                  <label
                    htmlFor="power"
                    className="block font-bold text-sm m-0 opacity-60 uppercase"
                  >
                    Power
                  </label>
                  <div className="flex mw-100 space-x-3 text-xl">
                    <input
                      className="bg-transparent w-full"
                      placeholder="12 000"
                      type="text"
                      id="power"
                      value={power || 0}
                      onChange={(e) => setPower(parseInt(e.target.value))}
                    />
                    <div className="opacity-60">GH/s</div>
                  </div>
                </div>

                <div className="w-1/3 pb-3">
                  <label
                    htmlFor="bonus"
                    className="block font-bold text-sm m-0 opacity-60 uppercase"
                  >
                    Bonus
                  </label>
                  <div className="flex mw-100 space-x-2 text-xl">
                    <div>
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
                    </div>
                  </div>
                  <div className="font-bold leading-7 text-sm">
                    +<span>{bonus}</span>% to power
                  </div>
                </div>
              </div>

              <div className="flex miner-modal-result space-x-4">
                <div className="w-1/3 wcash">
                  <div className="font-bold text-sm m-0 opacity-60 uppercase">
                    Day earning
                  </div>
                  <div className="text-2xl font-bold">
                    $<span>{daily}</span>
                  </div>
                </div>

                <div className="w-1/3 wcash">
                  <div className="font-bold text-sm m-0 opacity-60 uppercase">
                    Month earning
                  </div>
                  <div className="text-2xl font-bold">
                    $<span>{monthly}</span>
                  </div>
                </div>

                <div className="w-1/3 wcash">
                  <div className="font-bold text-sm m-0 opacity-60 uppercase">
                    Year earning
                  </div>
                  <div className="text-2xl font-bold">
                    $<span>{annual}</span>
                  </div>
                </div>
              </div>
            </form>
            <label
              htmlFor="bonus"
              className="block font-bold text-sm m-0 mt-3 opacity-60 uppercase"
            >
              Buy Miner
            </label>

            <div className="space-x-8 flex">
              <div className="w-1/3 act-btn-formobile">
                <button
                  onClick={Boolean(!errorMessage) ? buy : undefined}
                  type="button"
                  disabled={Boolean(errorMessage)}
                  form="deposit_form"
                  className="btn-action w-full"
                >
                  Buy
                </button>
              </div>
            </div>
            <div className="space-x-8 flex">
              <div className="w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BuyMiners.propTypes = {
  show: PropTypes.bool,
  toggle: PropTypes.func,
  setIsCoinSelectorModalOpened: PropTypes.func,
  setValue: PropTypes.func,
};

export default BuyMiners;
