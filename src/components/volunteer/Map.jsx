import React, { useRef, useEffect, useState, useCallback } from 'react';
import '../../styles/Map.css';

function Map(props) {
	// let map;
	const [marker, setMarker] = useState([]);
	console.log('marker', marker);

	const { allOrgs } = props;
	console.log(allOrgs);
	const ref = useRef();
	const style = {
		width: '100%',
		height: '400px',
		marginBottom: '2rem',
	};

	const getMap = useCallback(async () => {
		const map = new window.google.maps.Map(ref.current, {
			center: { lat: 30.266, lng: -97.733 },
			zoom: 11,
			mapId: '906637d0941a1c22',
			clickableIcons: false,
		});
		console.log('Map loaded');
		// const { allOrgs } = props;
		console.log('After props', allOrgs);
		const geocoder = new window.google.maps.Geocoder();
		await allOrgs.map((org, index) => {
			geocoder.geocode(
				{ address: org.address },
				async function (results, status) {
					if (status == window.google.maps.GeocoderStatus.OK) {
						console.log('Map Results are:', results);
						let marker = new window.google.maps.Marker({
							map: map,
							position: results[0].geometry.location,
							label: null,
							title: org.name,
						});

						let infoWindow = new window.google.maps.InfoWindow({
							content:
								'<p>' +
								org.name +
								'<br />' +
								results[0].formatted_address +
								'</p>',
						});

						window.google.maps.event.addListener(marker, 'click', function () {
							infoWindow.open(map, marker);
						});
					}
				}
			);
		});
	});

	useEffect(() => {
		getMap().catch(console.error);
	}, [getMap]);

	// useEffect(() => {
	// 	const infoWindow = new window.google.maps.InfoWindow();
	// 	const locateUser = () => {
	// 		const map = new window.google.maps.Map(ref.current, {
	// 			center: { lat: 30.266, lng: -97.733 },
	// 			zoom: 11,
	// 			mapId: '906637d0941a1c22',
	// 			clickableIcons: false,
	// 		});

	// 		if (navigator.geolocation) {
	// 			navigator.geolocation.getCurrentPosition(
	// 				(position) => {
	// 					const pos = {
	// 						lat: position.coords.latitude,
	// 						lng: position.coords.longitude,
	// 					};

	// 					infoWindow.setPosition(pos);
	// 					infoWindow.setContent('Location found');
	// 					infoWindow.open(map);
	// 					map.setCenter(pos);
	// 				}
	// 				// function () {
	// 				// 	handleLocationError(true, infoWindow, map.getCenter());
	// 				// }
	// 			);
	// 		} else {
	// 			// handleLocationError(false, infoWindow, map.getCenter());
	// 		}
	// 	};
	// 	// const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
	// 	// 	infoWindow.setPosition(pos);
	// 	// 	infoWindow.setContent(
	// 	// 		browserHasGeolocation
	// 	// 			? 'Error: The Geolocation service failed.'
	// 	// 			: "Error: Your browser doesn't support geolocation."
	// 	// 	);
	// 	// 	infoWindow.open(this.map);
	// 	// };

	// 	locateUser();
	// });

	return <div ref={ref} style={style} id="map" />;
}

export default Map;
