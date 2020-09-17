                        <?php
                        $nome = $_POST["n"];
                        $pontos = $_POST["i"];

                        function EnviarMsg($n, $p){
                            return "Olá {$n} sua idade é {$p}!";
                        }

                        echo EnviarMsg($nome, $pontos);
                        ?>