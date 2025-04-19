<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lucreon - Calculadora de Lucro</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
  <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
    <h1 class="text-2xl font-bold mb-4 text-center">Lucreon - Calculadora de Lucro</h1>

    <form id="calc-form" class="space-y-4">
      <div>
        <label for="custo" class="block font-semibold">Custo do Produto (R$)</label>
        <input type="number" id="custo" class="w-full p-2 border rounded-lg" step="0.01" required />
      </div>
      <div>
        <label for="lucro" class="block font-semibold">Lucro Desejado (%)</label>
        <input type="number" id="lucro" class="w-full p-2 border rounded-lg" step="1" required />
      </div>
      <div>
        <label for="taxa" class="block font-semibold">Taxa da Plataforma (%)</label>
        <input type="number" id="taxa" class="w-full p-2 border rounded-lg" step="0.01" value="20" required />
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Calcular</button>
    </form>

    <div id="resultado" class="mt-6 hidden bg-gray-50 p-4 rounded-lg">
      <p class="font-bold">Resultado:</p>
      <p id="preco-venda"></p>
      <p id="lucro-real"></p>
    </div>
  </div>

  <script>
    const form = document.getElementById('calc-form');
    const resultado = document.getElementById('resultado');
    const precoVenda = document.getElementById('preco-venda');
    const lucroReal = document.getElementById('lucro-real');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const custo = parseFloat(document.getElementById('custo').value);
      const lucro = parseFloat(document.getElementById('lucro').value) / 100;
      const taxa = parseFloat(document.getElementById('taxa').value) / 100;

      const precoFinal = custo / (1 - (lucro + taxa));
      const lucroFinal = precoFinal - custo - (precoFinal * taxa);

      precoVenda.textContent = `Preço de Venda: R$ ${precoFinal.toFixed(2)}`;
      lucroReal.textContent = `Lucro Líquido: R$ ${lucroFinal.toFixed(2)}`;
      resultado.classList.remove('hidden');
    });
  </script>
</body>
</html>

O conteúdo já está atualizado com a versão melhorada — por isso não houve mudanças novas para aplicar.

Agora vou gerar os arquivos adicionais para você:


---

README.md

# Lucreon - Calculadora de Lucro para Shopee e Mercado Livre

Lucreon é uma calculadora simples e inteligente que ajuda vendedores a definir o preço ideal de venda com base no custo do produto, taxa da plataforma e lucro desejado.

## Funcionalidades

- Cálculo automático de preço de venda
- Lucro líquido baseado na taxa e margem desejada
- Visual moderno e responsivo com Tailwind CSS

## Como usar

1. Insira o custo do produto
2. Defina o lucro desejado (%)
3. Informe a taxa da plataforma (Shopee ou Mercado Livre)
4. Clique em **Calcular**

## Tecnologias

- HTML5
- JavaScript
- Tailwind CSS
- Hospedagem via Vercel

## Deploy

Já disponível em: [https://lucreon02.vercel.app](https://lucreon02.vercel.app)

## Contribuição

Sinta-se livre para clonar, modificar e expandir este projeto.


---

.gitignore (caso use libs futuramente ou arquivos sensíveis)

node_modules/
.env
dist/
*.log


---

vercel.json (opcional para personalização de build)

{
  "rewrites": [
    { "source": "/", "destination": "/index.html" }
  ]
}


---

Comandos Git para subir tudo:

git add .
git commit -m "Melhoria completa no layout e lógica do Lucreon + arquivos auxiliares"
git push origin main

Deseja que eu gere um .zip com tudo ou quer que continue criando mais recursos para o Lucreon, como painel de histórico, salvar produtos, etc?

