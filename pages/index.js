import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Header from "../components/header";
import ElData from "../components/eldata";
import fetch from "isomorphic-unfetch";
import Landing from "../components/landing";
import Layout from "../components/layout";
import { getTotal } from "../utils/stats";

function App(props) {
	return (
		<Layout>
			<Landing />
		</Layout>
	);
}

export default App;
