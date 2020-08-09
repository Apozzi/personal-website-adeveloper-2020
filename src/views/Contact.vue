<template>
  <div id="about" key="about" class="about">
    <Menu />
    <section id="main" class="wrapper">
				<div class="container">
				<h2 class="contact-txt">Contact</h2>
					<section>
              <div>
                <div>
                  <input v-bind:class="{'input-error': error }" class="input" type="text" name="name" id="name" value="" v-model="name" placeholder="Name">
                </div>
                <div>
                  <input v-bind:class="{'input-error': error }" class="input" type="email" name="email" id="email" v-model="email" value="" placeholder="Email">
                </div>
                <div class="checkbox-content">
                  <input class="checkbox" type="checkbox" id="human" v-model="check" name="human" value="1" unchecked="">
                  <label class="checkbox-txt" for="human">I am a human not a robot.</label>
                </div>
                <div class="txtarea-box">
                  <textarea v-bind:class="{'input-error': error }" class="contact-txt-area" v-model="msg" name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                </div>
                <div>
                  <ul class="actions">
                    <li><Button v-on:click.native="sendEmail" class="msg" label="Send message" /></li>
                    <li><Button v-on:click.native="reset" class="reset" label="Reset" /></li>
                  </ul>
                </div>
              </div>
						</section>
            </div>
            <div class="error-form" v-if="error || notChecked">
              {{errorMsg}}
            </div>
            <div class="send-form" v-if="sended">
              Email sent successfully!
            </div>
      </section>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Button from "@/components/Button.vue";

/* eslint-disable */
emailjs.init("user_Q0FwMsJJJCxlHVu4L0luy");

export default {
  name: "Contact",
  components: {
    Menu,
    Button
  },
  data() {
    return { 
      name: null,
      email: null,
      msg: null,
      check: false,
      error: false,
      notChecked: false,
      errorMsg: "",
      sended: false
    };
  },
  methods: {
    reset() {
      this.name = null;
      this.email = null;
      this.msg = null;
      this.check = null;
      this.sended = false;
      this.notChecked = false;
      this.error = false;
      return;
    },
    sendEmail() {
      // --------- Validate Components ---------
      if (!this.name || 
          !this.email || 
          !this.msg) {
            this.error = true;
            this.errorMsg = "Error. Please fill all information in the form.";
            return;
      }
      this.error = false;
      if (!this.check) {
        this.notChecked = true;
        this.errorMsg = "Error. Please check the verification.";
        return;
      }
      this.notChecked = false;

      // --------- Send Email ---------
      const templateParams = {
        name: this.name,
        email: this.email,
        msg: this.msg
      }

      const serviceId = "default_service";
      const templateId = "t1";
      emailjs.send(serviceId, templateId, templateParams);
      this.sended = true;
      return;
    }
  }
};
/* eslint-disable */
</script>

<style scoped lang="scss">
  .contact-txt {
    color: white;
    font-weight: 700;
    line-height: 1em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
    text-align: left;
  }

  .input {
    float: left;
    margin-right: 40px;
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
    border: #7d7d7d solid 1px;
    box-shadow: rgb(125, 125, 125) 0px 1px;
    color: rgb(255, 255, 255);
    font-family: Raleway, Arial, Helvetica, sans-serif;
    font-size: 14.6667px;
    height: 40.3281px;
    padding: 0px 14.6667px;
    width: 30%;
    max-width: 470px;
    
  }

  .wrapper {
    margin-left: 207px;
    margin-top: 83px;
  }

  .checkbox {
    border: #7d7d7d solid 1px;
    color: rgb(255, 255, 255);
    font-family: Raleway, Arial, Helvetica, sans-serif;
    height: 40.3281px;
    width: 45.5px;
    margin-top: 16px;
    margin-left: -2px;
    &:hover {

    }
  }

  .checkbox-txt {
    margin-top: 32px;
    color: white;
    font-size: 20px;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    float: right;
    margin-top: 23px;
    margin-left: 19px;
    width: 50vw;
    text-align: start;
  }

  .checkbox-content {
    float: left;
    margin-top: 7px;
  }

  .contact-txt-area {
    float: left;
    margin-right: 40px;
    background-color: black;
    border-radius: 4px;
    border: #7d7d7d solid 1px;
    color: white;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    font-size: 14.6667px;
    float: left;
    width: 1000px;
    height: 112px;
    padding: 22px; 
    max-width: 100%;
  }

  .msg {
    float: left;
    margin: 24px;
    margin-left: -38px;
  }

  .reset {
    float: left;
    margin: 24px;
  }

  .txtarea-box {
    margin-top: 32px;
    height: 159px;
    float: left;
    width: calc(100% - 127px);
    margin-bottom: 12px;
  }

  li {
    list-style: none;
  }

  .input-error {
    border: red solid 1px;
    box-shadow: red 0px 1px;
  }

  .container {
    height: 463px;
  }

  .error-form {
    text-align: left;
    color: white;
    background: #de4444;
    width: fit-content;
    height: 28px;
    padding: 22px;
    padding-top: 24px;
    padding-right: 27px;
    border-radius: 10px;
  }

  .send-form {
    text-align: left;
    color: white;
    background: #3ed858;
    width: fit-content;
    height: 28px;
    padding: 22px;
    padding-top: 24px;
    padding-right: 27px;
    border-radius: 10px;
  }
</style>
