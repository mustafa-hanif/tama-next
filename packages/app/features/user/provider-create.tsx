import { Button, Paragraph, XStack, YStack, Input, Label, Checkbox, ScrollView } from '@my/ui'
import { Check, ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'
import { themes } from '@tamagui/themes'
import React from 'react'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function ProviderCreate() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <ScrollView backgroundColor={themes.dark.pink4} f={1}>
    <YStack f={1} jc="center" ai="center" space="$0">
      <YStack p="$3" space="$0">
        <Label htmlFor="name">
          Your Name
        </Label>
        <Input minWidth={300} size="$4" borderWidth={2} id="name" placeholder="Miss Juhi" />
      </YStack>

      <YStack p="$3" space="$0">
        <Label htmlFor="phone">
          Your Whatsapp number
        </Label>
        <Input minWidth={300} size="$4" borderWidth={2} id="phone" placeholder='+971521234567' />
      </YStack>

      <YStack space="$0">
        <Label minWidth={300} htmlFor="name">
          Your services
        </Label>
        <ServiceCheckBox>Waxing</ServiceCheckBox>
        <ServiceCheckBox>Manicure</ServiceCheckBox>
        <ServiceCheckBox>Pedicure</ServiceCheckBox>
        <ServiceCheckBox>Hair Color</ServiceCheckBox>
      </YStack>

      <YStack f={1} p="$3" space="$0" mb="$6">
        <Label htmlFor="idd">
          Your Emirates ID number
        </Label>
        <Input minWidth={300}  size="$4" borderWidth={2} id="idd" placeholder="34123-1123123141-1"  />
      </YStack>
      <Button backgroundColor={themes.dark.purple9} color={themes.dark.purple1} {...link} icon={ChevronRight}>
        Save my profile
      </Button>
    </YStack>
    </ScrollView>
  )
}


const ServiceCheckBox = ({ children }) => {
  return <XStack ai="center" space="$4">
  <Checkbox>
    <Checkbox.Indicator>
      <Check />
    </Checkbox.Indicator>
  </Checkbox>

  <Label>
    {children}
  </Label>
</XStack>
}