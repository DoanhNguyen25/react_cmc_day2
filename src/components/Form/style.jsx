import styled from "styled-components";

export const FormWrapper = styled.div`
  background: #fff;
  color: #000;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 50%;
  text-align: center;
  padding-bottom: 3rem;
  .form--title {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 2rem;
  }

  .form__container {
    max-width: 90%;
    margin: 0 auto;
    padding-top: 1rem;

    .form--desc {
      color: gray;
      font-size: 0.75rem;
      font-weight: 500;
    }
    .form__info {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2rem;

      .form__col--left,
      .form__col--right {
        width: 50%;
        padding: 1rem;

        .form__col--group {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;

          input[type="text"],
          input[type="number"],
          input[type="date"] {
            border: none;
            width: 90%;
            outline: none;
            border-bottom: 1px solid gray;
            font-size: 1rem;
          }
          &-name {
            font-size: 1rem;
            font-family: arial;
            font-weight: 500;
            color: gray;
          }
        }
      }
    }

    .btn--submit {
      padding: 1rem;
      border: none;
      outline: noned;
      text-transform: uppercase;
      background: #ce5628;
      color: #fff;
    }
    .form--checkbox {
      text-align: left;
      font-size: 1rem;
      font-weight: 450;
      margin-bottom: 2rem;
      padding: 0 3rem;
      display: inherit;
      position: relative;

      &:hover input[type="checkbox"] ~ .checkmark {
        background-color: #ccc;
      }

      input[type="checkbox"] {
        display: none;

        &:checked ~ .checkmark {
          background-color: #ce5628;
        }
        &:checked ~ .checkmark:after {
          display: block;
        }
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 1rem;
        height: 25px;
        width: 25px;
        background-color: #eee;

        &:after {
          content: "";
          position: absolute;
          display: none;
        }
      }
    }
    .form--checkbox {
      .checkmark {
        &:after {
          content:'';
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
`;
