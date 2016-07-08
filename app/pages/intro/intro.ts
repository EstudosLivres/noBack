import { NgZone } from '@angular/core';
import { SignPage } from '../sign/sign';
import { Component, ViewChild } from '@angular/core';
import { Slides, Page, NavController } from 'ionic-angular';

/*
 Generated class for the IntroPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/intro/intro.html'
})

export class IntroPage {
    // Attributes
    slideButton =  'Pular Introdução';
    defaultWizardBg = "imgs/wizard_bg.png";
    blurWizardBg = "imgs/blur_wizard_bg.png";
    bgImage = this.blurWizardBg;

    // Slides config options
    mySlideOptions = {
        allowSwipeToPrev: true,
        allowSwipeToNext: true
    };

    // View elements
    @ViewChild('userSignWizard') slider: Slides;

    constructor(private nav:NavController) {
        this.bgImage = this.defaultWizardBg;
        this.nav = nav;
    }

    // Depending on each slide index it is the blur or not blur image
    manageFrostGlassEffect() {
        var lastSliderIndex = this.slider.length()-1;
        var currentSlide = this.slider.getActiveIndex();

        if(currentSlide == lastSliderIndex) {
            this.slideButton =  'Entrar';
        }else {
            this.slideButton =  'Pular Introdução';
        }

        if(currentSlide) {
         this.bgImage = this.blurWizardBg;
        }else {
            this.bgImage = this.defaultWizardBg;
        }
    }

    // Goes to the Sign Page
    skipIntro() {
        this.nav.push(SignPage);
    }
}
