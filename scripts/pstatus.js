        // Function to check if plex.tran.club is online
        async function checkPlexStatus() {
            const statusDiv = document.getElementById('status');
            const plexUrl = 'https://plex.tran.club'; // Replace with the URL you want to check

            try {
                const response = await fetch(plexUrl, { method: 'GET', mode: 'no-cors' });

                // If the response status is successful, the server is online
                if (response.ok) {
                    statusDiv.textContent = 'Plex server is online.';
                    statusDiv.className = 'online';
                } else {
                    statusDiv.textContent = `Plex server is offline. Status: ${response.status}`;
                    statusDiv.className = 'offline';
                }
            } catch (error) {
                // If an error occurs (server unreachable, etc.), show it as offline
                statusDiv.textContent = 'Plex server is offline or unreachable.';
                statusDiv.className = 'offline';
            }
        }
