import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardPlanets from "../component/cardPlanets";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerPersonajes();
		actions.obtenerPlanetas();
	}, []);

	// Verificar si `store.planets` tiene datos
	console.log("Planets data:", store.planets);

	return (
		<div className="text-center mt-5">
			<h1>Starwars</h1>
			<h1 className="mt-4">Planets</h1>
			<div className="d-flex flex-row overflow-scroll">
				{store.planets && store.planets.length > 0 ? (
					store.planets.map((item, index) => {
						return <CardPlanets key={index} name={item.name} uid={item.uid} />;
					})
				) : (
					<p>No planets data found</p>
				)}
			</div>
		</div>
	);
};
