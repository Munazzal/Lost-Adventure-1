const canvas = document.getElementById('player');
const circle = document.createElement('div');
circle.classList.add('circle');
canvas.appendChild(circle);
const bag = document.getElementById('bag');
const bag_content = document.getElementById('bag-inside');
const slot0 = document.getElementById('slot0'),
        slot1 = document.getElementById('slot1'),
        slot2 = document.getElementById('slot2'),
        slot3 = document.getElementById('slot3'),
        slot4 = document.getElementById('slot4'),
        slot5 = document.getElementById('slot5'),
        slot6 = document.getElementById('slot6');
        const food = document.getElementById('food-item-one');
        const foodDiv = document.getElementById("food-item-one");
    const slot1Div = document.getElementById("slot1");
    const itemsDiv = document.getElementById("items");
    const hunger_bar = document.getElementById('hunger');

    let food_ = false;
    let health = 200;
    let hunger = 190;
    let energy = 200;
    let thirst = 200;
    // When food is clicked, move it to slot1
    foodDiv.addEventListener("click", () => {
        if(bagopened) {
            slot1Div.appendChild(foodDiv);
            food_ = true;
        }
    });

    // When food is clicked, move it to items
    slot1Div.addEventListener("click", () => {
        if(bagopened) {
            itemsDiv.appendChild(foodDiv);
            food_ = false;
        }
    });

    let x = 0;
    let y = 0;
    let slot_no = 'hand';
        document.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowUp' || event.key === 'w') {
                    player.style.background = 'url(Game-player-standing-facing-north.png)';
                    player.style.width = '100px';
                    y -= 10;
                }
                if(event.key === 'ArrowDown' || event.key === 's') {
                    player.style.background = 'url(Game-player-standing-facing-south.png)';
                    player.style.width = '100px';
                    y += 10;
                }
                if (event.key === 'ArrowLeft' || event.key === 'a') {
                    player.style.background = 'url(Game-player-standing-facing-west.png)';
                    player.style.width = '85px';
                    x -= 10;
                }
                if (event.key === 'ArrowRight' || event.key === 'd'){
                    player.style.background = 'url(Game-player-standing-facing-east.png)';
                    player.style.width = '85px';
                    x += 10;
                }
            player.style.transform = `translate(${x}px, ${y}px)`;
            player.style.backgroundSize = `cover`;
            if (event.key === '1') {
                slot_no = 1;
                setInventory()
            }
            if (event.key === '2') {
                slot_no = 2;
                setInventory()
            }
            if (event.key === '3') {
                slot_no = 3;
                setInventory()
            }
            if (event.key === '4') {
                slot_no = 4;
                setInventory()
            }
            if (event.key === '5') {
                slot_no = 5;
                setInventory()
            }
            if (event.key === '6') {
                slot_no = 6;
                setInventory()
            }
            if (event.key === '0') {
                slot_no = 'hand';
                setInventory()
            }
                if (areTouching(player, bag)) {
                    if(event.key === 'o' && !bagopened) {
                      bag_content.style.display = 'block';
                      bagopened = true;
                    }
                    else if(key =  'o' && bagopened) {
                      bagopened = false;
                      bag_content.style.display = 'none';
                    }
                } else {
                    bag_content.style.display = 'none';
                }
        });

        function setInventory() {
            if(slot_no === 'hand') {
                slot0.style.border = '5px solid white';
                slot1.style.border = '5px solid rgb(83, 83, 83)';
                slot2.style.border = '5px solid rgb(83, 83, 83)';
                slot3.style.border = '5px solid rgb(83, 83, 83)';
                slot4.style.border = '5px solid rgb(83, 83, 83)';
                slot5.style.border = '5px solid rgb(83, 83, 83)';
                slot6.style.border = '5px solid rgb(83, 83, 83)';
            }
            if(slot_no === 1) {
                slot0.style.border = '5px solid rgb(83, 83, 83)';
                slot1.style.border = '5px solid white';
                slot2.style.border = '5px solid rgb(83, 83, 83)';
                slot3.style.border = '5px solid rgb(83, 83, 83)';
                slot4.style.border = '5px solid rgb(83, 83, 83)';
                slot5.style.border = '5px solid rgb(83, 83, 83)';
                slot6.style.border = '5px solid rgb(83, 83, 83)';
            }
            if(slot_no === 2) {
                slot0.style.border = '5px solid rgb(83, 83, 83)';
                slot1.style.border = '5px solid rgb(83, 83, 83)';
                slot2.style.border = '5px solid white';
                slot3.style.border = '5px solid rgb(83, 83, 83)';
                slot4.style.border = '5px solid rgb(83, 83, 83)';
                slot5.style.border = '5px solid rgb(83, 83, 83)';
                slot6.style.border = '5px solid rgb(83, 83, 83)';
            }
            if(slot_no === 3) {
                slot0.style.border = '5px solid rgb(83, 83, 83)';
                slot1.style.border = '5px solid rgb(83, 83, 83)';
                slot2.style.border = '5px solid rgb(83, 83, 83)';
                slot3.style.border = '5px solid white';
                slot4.style.border = '5px solid rgb(83, 83, 83)';
                slot5.style.border = '5px solid rgb(83, 83, 83)';
                slot6.style.border = '5px solid rgb(83, 83, 83)';
            }
            if(slot_no === 4) {
                slot0.style.border = '5px solid rgb(83, 83, 83)';
                slot1.style.border = '5px solid rgb(83, 83, 83)';
                slot2.style.border = '5px solid rgb(83, 83, 83)';
                slot3.style.border = '5px solid rgb(83, 83, 83)';
                slot4.style.border = '5px solid white';
                slot5.style.border = '5px solid rgb(83, 83, 83)';
                slot6.style.border = '5px solid rgb(83, 83, 83)';
            }
            if(slot_no === 5) {
                slot0.style.border = '5px solid rgb(83, 83, 83)';
                slot1.style.border = '5px solid rgb(83, 83, 83)';
                slot2.style.border = '5px solid rgb(83, 83, 83)';
                slot3.style.border = '5px solid rgb(83, 83, 83)';
                slot4.style.border = '5px solid rgb(83, 83, 83)';
                slot5.style.border = '5px solid white';
                slot6.style.border = '5px solid rgb(83, 83, 83)';
            }
            if(slot_no === 6) {
                slot0.style.border = '5px solid rgb(83, 83, 83)';
                slot1.style.border = '5px solid rgb(83, 83, 83)';
                slot2.style.border = '5px solid rgb(83, 83, 83)';
                slot3.style.border = '5px solid rgb(83, 83, 83)';
                slot4.style.border = '5px solid rgb(83, 83, 83)';
                slot5.style.border = '5px solid rgb(83, 83, 83)';
                slot6.style.border = '5px solid white';
            }
        }

function areTouching(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}
let bagopened = false;