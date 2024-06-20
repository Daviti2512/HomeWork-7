const blocks = document.querySelectorAll('.divi');
        const container = document.getElementById('diviContainer');
        const trash = document.getElementById('trashBin');

        blocks.forEach(block => {
            block.addEventListener('dragstart', Start);
            block.addEventListener('dragend', End);
        });

        container.addEventListener('dragover', Over);
        container.addEventListener('dragenter', Enter);
        container.addEventListener('dragleave', Leave);
        container.addEventListener('drop', drop);

        trash.addEventListener('dragover', Over);
        trash.addEventListener('dragenter', Enter);
        trash.addEventListener('dragleave', Leave);
        trash.addEventListener('drop', Trash);

        let Block = null;

        function Start(e) {
            Block = this;
            setTimeout(() => this.style.display = 'none', 0);
        }

        function End(e) {
            setTimeout(() => {
                this.style.display = 'block';
                Block = null;
            }, 0);
        }

        function Over(e) {
            e.preventDefault();
        }

        function Enter(e) {
            e.preventDefault();
        }

        function Leave(e) {
        }

        function drop(e) {
            e.preventDefault();
            if (Block) {
                container.insertBefore(Block, e.target.closest('.block'));
            }
        }

        function Trash(e) {
            e.preventDefault();
            if (Block) {
                Block.remove();
            }
        }