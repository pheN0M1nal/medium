import styled from 'styled-components';

export const BoxContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`;

export const FormContainer = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
	font-size: 11px;
	color: rgba(200, 200, 200, 0.8);
	font-weight: 500;
	text-decoration: none;
`;

export const BoldLink = styled.a`
	font-size: 11px;
	color: rgb(131, 114, 114);
	font-weight: 500;
	text-decoration: none;
	margin: 0 4px;
`;

export const Input = styled.input`
	width: 100%;
	height: 42px;
	outline: none;
	border: 1px solid rgba(200, 200, 200, 0.3);
	padding: 0px 10px;
	border-bottom: 1.4px solid transparent;
	transition: all 200ms ease-in-out;
	font-size: 12px;

	&::placeholder {
		color: rgb(131, 114, 114);
	}

	&:not(:last-of-type) {
		border-bottom: 1.5px solid rgba(150, 150, 150, 0.4);
	}

	&:focus {
		outline: none;
		border-bottom: 2px solid rgb(16, 13, 0);
	}
`;

export const SubmitButton = styled.button`
	width: 100%;
	padding: 11px 40%;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	border: none;
	border-radius: 100px 100px 100px 100px;
	cursor: pointer;
	transition: all, 240ms ease-in-out;
	background: rgb(16, 13, 0);
	background: linear-gradient(
		58deg,
		rgba(56, 13, 0, 1) 20%,
		rgba(16, 23, 0, 1) 100%
	);

	&:hover {
		filter: brightness(1.03);
	}
`;
