---
title: The Importance of Abstraction in Software
date: 2017-11-01 20:55:34
tags:
---

**Abstraction** is one of the fundamental concepts of science and engineering. It is most highly valued in computer science and allows for communication of intent at different levels of responsibility.

# Layers

It can be confusing at first, especially since the word abstraction has connotations of obscurity, as seen in modern abstract art. However it can be basically understood as putting boundaries around complexity in a problem. 

![](https://i.imgur.com/7t69XGp.jpg) 
src: https://thevisibilityblog.com/2011/08/26/freud-cells-and-visibility/

By dividing a problem into layers of complexity, a seemingly enormously complex task, becomes easy to manage. For example the image above shows the layers of scientific understanding, which helps to explain the natural behaviour behind the famous psychologist **Sigmund Freud**. The first layer below Freud represents the brain as a structure. This layer focuses on the personality and consciousness of Freud. 

It is important that the scope of this layer is responsible for the mind of Freud, not the mechanism behind the mind. The layer below the brain is the electrical activity in the neurons from within the brain. This can be observed from MRI machines and although not well understood, it can is used to explain how thoughts arise to thoughts and personality. The next layer is the neuron cells themselves. This layer is used to explain how the cells work individually, this layer is not concerned about the network of electrical activity, but only a single electrical impulse. 

The final layer shown is the molecular structure of the cells. This is one of the lowest layers of the stack and is responsible for the way atoms and molecules interact, to build the neurons. Subsequently, it becomes clear that we have defined a system composed of layers of concepts. These layers can be thought of as **abstractions**, each layer abstraction, is only concerned about the stuff on it's layer. Not below ,  Each layer represents a different level of detail, which has it's own realm of complexity. The important thing to note, is that each layer has it's own rules and behaviour, this allows us to focus on what is happening within each layer, rather than treating the whole brain and it's behaviour as one item.

# A TV Remote!

One simple example that I've found to illustrate the importance of abstraction in software, is simply an ordinary TV Remote. Basically, the TV remote provides several key features which help you manipulate the TV:

*   Volume Up / Down
*   Channel Up / Down
*   Channel Number 1,2,3,4 ....
*   Power On / Off

All of these _features_ are presented as buttons grouped together on the same interface. Although they vary in what they do, they can be considered to be all on the same **layer of abstraction**. 

![](https://i.imgur.com/OsLN3SV.png) 

As seen above, the _human interface layer_ (buttons layer) is one of many layers of abstraction that are probably present in a modern TV.

## Benefit 1: Separation of Concerns

The first benefit of defining a system like this into separate layers, is that each of the layers focuses on a specific problem, which should be abstracted away in the layer above. For example, the person using the remote should not need to know about the specific frequency (210.25 MHz) that the channel is on, that would be really annoying. That is why this is _**abstracted **_ away from the remote. so you just push channel **10** through the remote and the layers below select the corresponding TV frequency of 210.25 MHz.

## Benefit 2: Independence

It is clear that each abstraction provides a simplified layer to hide the complexity of the layer below it. By hiding complexity below each layer, the current layer can focus on what it's meant to do. <span style="font-size: 1rem;">For example, you don't want to have to memorise every frequency of every TV station! That's what the numbered channels are for!</span>

# The Car Factory Example

Abstraction can also be viewed as the application of automation. This could be either humans or machinery. For example, imagine a factory that produces a range of cars. The factory is composed of many different people and machines with a range of authorities and responsibilities. The machine that lifts the engine into the car does not need to know how to inflate the tyres, and the person inflating the tyres does not need to know how to paint the car body. It's this **separation of concerns **that is abstracted away from each part of the factory. 

This allows each part to focus on what they are doing and not worry about other scopes of work. This sounds straight forward, but dividing the factory into separate assembly lines can get out of hand. On one end of the spectrum you could imagine an enormous factory hundreds of square km's in size. In this factory, tens of thousands of people enter their tiny working area's and do one task in the manufacture of a car. 

By dividing the work into the tiniest individual tasks, they've reduced the complexity for each individual but increased the complexity of the assembly of the car. In contrast, the opposite end of the scale is a large warehouse with one old man inside. He has studied and practiced his whole life on the construction of this one particular model of car. All he needs is the tools and parts and he can make the car, making him the value of the business... flexible but bad abstraction. 

[![](https://i.imgur.com/Q1peX5Z.png)](https://imgs.xkcd.com/comics/purity.png) https://www.youtube.com/watch?v=p7nGcY73epw