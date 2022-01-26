# DROP!
## Unidades CSS
Unidades de medidas do CSS<br>
Layout Fixo<br>
px - Pixels<br>
<space>

Layout Fluido
% - porcentagem
auto - automatico
vh - Viewport Height
vw - Viewport Widht

Textos Fixos
1px = 0.75pt
16px = 12pt

Textos Fluidos
em - multiplicado pelo pai
rem - multiplicado pelo root





## Ícones personalizados
Para usar um SVG personalizado, forneça seu URL no srcatributo para solicitar o arquivo SVG externo. O srcatributo funciona da mesma forma <source><img src="..."></source>que o URL deve ser acessível a partir da página da Web que está fazendo uma solicitação para a imagem. Além disso, o arquivo externo só pode ser válido svge não permite scripts ou eventos dentro do svgelemento.

< ion-icon  src = "/path/to/external/file.svg" > </ ion-icon >
Variantes
Cada ícone de aplicativo no Ionicons tem uma variante fillede outline. sharpEssas diferentes variantes são fornecidas para que seu aplicativo pareça nativo para uma variedade de plataformas. A variante preenchida usa o nome padrão sem sufixo. Observação: os ícones de logotipo não têm contornos ou variantes nítidas.

< ion-icon  name = "coração" > </ ion-icon >  <!--filled--> 
< ion-icon  name = "heart-outline" > </ ion-icon >  <!--outline--> 
< ion-icon  name = "coração afiado" > </ ion-icon >  <!--sharp-->
Especificidade da plataforma
Ao usar ícones no Ionic Framework, você pode especificar ícones diferentes por plataforma. Use os atributos mde iose forneça o nome do ícone/variante específico da plataforma.

<ion-icon ios = "heart-outline"  md = "heart-sharp" ></ion-icon>
Tamanho
Para especificar o tamanho do ícone, você pode usar o sizeatributo para nossos tamanhos de fonte predefinidos.

< ion-icon  size = "pequeno" > </ ion-icon > 
< ion-icon  size = "grande" > </ ion-icon >
Ou você pode definir um tamanho específico aplicando a font-sizepropriedade CSS no ion-iconcomponente. Recomenda-se usar tamanhos de pixel múltiplos de 8 (8, 16, 32, 64 etc.)

ion-icon {
   tamanho da fonte : 64px ;
}
Cor
Especifique a cor do ícone aplicando a colorpropriedade CSS no ion-iconcomponente.

íon-ícone {
   cor : azul;
}
Peso do curso
Ao usar uma outlinevariante de ícone, é possível ajustar a espessura do traço, para melhor equilíbrio visual em relação ao tamanho do ícone ou em relação ao peso do texto adjacente. Você pode definir um tamanho específico aplicando a --ionicon-stroke-weightpropriedade personalizada CSS ao ion-iconcomponente. o valor padrão é32px

< ion-icon  name = "coração-contorno" > </ ion-icon >
ion-icon {
   --ionicon-stroke-width : 16px ;
}