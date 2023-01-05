input.onButtonPressed(Button.A, function () {
    Rock = randint(1, 3)
    if (Rock == 1) {
        basic.showIcon(IconNames.No)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1671, 4126, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else if (Rock == 2) {
        basic.showIcon(IconNames.No)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1671, 4126, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else if (Rock == 3) {
        basic.showIcon(IconNames.Yes)
        music.playMelody("A D C5 F C G B E ", 105)
        music.playMelody("A D C5 F C G B E ", 500)
    }
    basic.pause(2000)
    basic.showIcon(IconNames.Diamond)
})
input.onButtonPressed(Button.B, function () {
    Rock = randint(1, 3)
    if (Rock == 1) {
        basic.showIcon(IconNames.Yes)
        music.playMelody("A D C5 F C G B E ", 1)
        music.playMelody("A D C5 F C G B E ", 1)
    } else if (Rock == 1) {
        basic.showIcon(IconNames.No)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1671, 4126, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else if (Rock == 3) {
        basic.showIcon(IconNames.No)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1671, 4126, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
    basic.pause(2000)
    basic.showIcon(IconNames.Diamond)
})
let Rock = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
